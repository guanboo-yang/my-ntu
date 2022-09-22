import { fetch, CookieJar, Cookie } from 'node-fetch-cookies'
import * as cheerio from 'cheerio'
import type { Handler } from '@netlify/functions'
import type { Profile } from '../src/interfaces'

export const handler: Handler = async (event, _context) => {
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

      const res = await fetch(
        cookieJar,
        'https://if163.aca.ntu.edu.tw/eportfolio/student/index.asp'
      )
      const arrayBuffer = await res.arrayBuffer()
      const decoded = decoder.decode(arrayBuffer)
      const $ = cheerio.load(decoded)
      const el = $(
        'body > table:nth-child(2) > tbody > tr > td.content > div > div > div > table > tbody'
      )
      const profile: Profile = {}
      profile.id = el.find('tr:nth-child(1) > td:nth-child(2)').text().trim()
      profile.name = el.find('tr:nth-child(1) > td:nth-child(4)').text().trim()
      profile.department = el
        .find('tr:nth-child(2) > td:nth-child(2)')
        .text()
        .trim()
      profile.grade = el.find('tr:nth-child(2) > td:nth-child(4)').text().trim()
      profile.sex = el.find('tr:nth-child(3) > td:nth-child(2)').text().trim()
      profile.status = el
        .find('tr:nth-child(3) > td:nth-child(4)')
        .text()
        .trim()
      profile.birthday = el
        .find('tr:nth-child(4) > td:nth-child(2)')
        .text()
        .trim()
      profile.idNumber = el
        .find('tr:nth-child(4) > td:nth-child(4)')
        .text()
        .trim()
      profile.english = el
        .find('tr:nth-child(5) > td:nth-child(2)')
        .text()
        .trim()
      profile.address = el
        .find('tr:nth-child(6) > td:nth-child(2)')
        .text()
        .trim()
      profile.identity = el
        .find('tr:nth-child(7) > td:nth-child(2)')
        .text()
        .trim()
      return {
        statusCode: 200,
        body: JSON.stringify({
          cookies: [...cookieJar.cookiesValid(true)],
          profile
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
