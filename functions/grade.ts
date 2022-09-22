import { fetch, CookieJar, Cookie } from 'node-fetch-cookies'
import * as cheerio from 'cheerio'
import type { Handler } from '@netlify/functions'

export const handler: Handler = async (event, context) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  }
  switch (event.httpMethod) {
    case 'OPTIONS':
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'This was a preflight request' }),
        headers
      }
    case 'POST':
      if (!event.body) {
        return {
          statusCode: 400,
          body: JSON.stringify({ message: 'Bad Request' }),
          headers
        }
      }

      const cookieJar = new CookieJar()
      const decoder = new TextDecoder('big5')
      const body = JSON.parse(event.body)
      const cookies = body.cookies
      cookies.forEach((cookie: any) =>
        cookieJar.addCookie(Cookie.fromObject(cookie))
      )

      let res: Response,
        arrayBuffer: any,
        decoded: string,
        $: cheerio.CheerioAPI
      res = await fetch(
        cookieJar,
        'https://if163.aca.ntu.edu.tw/eportfolio/student/CourseSem.asp'
      )
      arrayBuffer = await res.arrayBuffer()
      decoded = decoder.decode(arrayBuffer)
      $ = cheerio.load(decoded)
      const table = $(
        'html > body > table:nth-child(2) > tbody > tr > td:nth-child(2) > div > div > div > center > table'
      )
      // if not logged in
      if (table.length === 0) {
        return {
          statusCode: 401,
          body: JSON.stringify({ message: 'Unauthorized' }),
          headers
        }
      }
      // end if
      const grades = {}
      for (let i = 0; i < table.length; i++) {
        const row = $(table[i]).find('tbody > tr')
        let yearSemester
        for (let j = 1; j < row.length; j++) {
          const info = $(row[j])
          yearSemester = info.find('td:nth-child(1)').text().trim()
          const year = yearSemester.slice(0, -1)
          const semester = yearSemester.slice(-1)
          if (yearSemester === '') continue
          if (!grades[yearSemester])
            grades[yearSemester] = { year, semester, courses: [] }
          const course = {
            id: info.find('td:nth-child(3)').text().trim(),
            name: info.find('td:nth-child(7)').text().trim(),
            credits: info.find('td:nth-child(6)').text().trim(),
            grade:
              info.find('td:nth-child(8)').text().trim() ||
              info.find('td:nth-child(12)').text().trim() ||
              info.find('td:nth-child(9)').text().trim()
          }
          grades[yearSemester].courses.push(course)
        }
        const credits = $(table[i])
          .nextAll('center')
          .first()
          .text()
          .split('：')[1]
        if (credits) grades[yearSemester].credits = credits
      }
      res = await fetch(
        cookieJar,
        'https://if163.aca.ntu.edu.tw/eportfolio/student/StuQryArr.asp'
      )
      arrayBuffer = await res.arrayBuffer()
      decoded = decoder.decode(arrayBuffer)
      $ = cheerio.load(decoded)
      const row = $(
        'body > table:nth-child(2) > tbody > tr > td.content > div > div > div > center > table > tbody > tr'
      )
      for (let i = 1; i < row.length; i++) {
        const info = $(row[i])
        const year = info.find('td:nth-child(7)').text()
        const semester = info.find('td:nth-child(8)').text()
        const yearSemester = `${year}${semester}`
        if (year === '') continue
        if (semester === '全年') continue
        if (!grades[yearSemester])
          grades[yearSemester] = { year, semester, courses: [] }
        grades[yearSemester].gpa = info.find('td:nth-child(4)').text()
        grades[yearSemester].rank = info.find('td:nth-child(5)').text()
      }
      return {
        statusCode: 200,
        body: JSON.stringify({
          cookies: [...cookieJar.cookiesValid(true)],
          grades
        }),
        headers
      }
    default:
      return {
        statusCode: 405,
        body: JSON.stringify({ message: 'Method Not Allowed' }),
        headers
      }
  }
}
