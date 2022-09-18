import { fetch, CookieJar } from 'node-fetch-cookies'
import { load } from 'cheerio'

export async function handler(event, context) {
	switch (event.httpMethod) {
		case 'OPTIONS':
			return {
				statusCode: 200,
				body: 'This was a preflight request',
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Headers': 'Content-Type',
					'Access-Control-Allow-Methods': 'POST',
				},
			}
		case 'POST':
			const cookieJar = new CookieJar()
			const body = JSON.parse(event.body)
			const name = body.name
			const pass = body.pass
			await fetch(cookieJar, 'https://if163.aca.ntu.edu.tw/eportfolio/login.asp', {
				method: 'POST',
				headers: { 'content-type': 'application/x-www-form-urlencoded' },
				body: `user=${name}&pass=${pass}&Submit=%E7%99%BB%E5%85%A5`,
			})
			let res, arrayBuffer, decoded, $, el
			const decoder = new TextDecoder('big5')
			res = await fetch(cookieJar, 'https://if163.aca.ntu.edu.tw/eportfolio/student/index.asp')
			arrayBuffer = await res.arrayBuffer()
			decoded = decoder.decode(arrayBuffer)
			$ = load(decoded)
			el = $('body > table:nth-child(2) > tbody > tr > td.content > div > div > div > table > tbody')
			const profile = {}
			profile.id = el.find('tr:nth-child(1) > td:nth-child(2)').text().trim()
			profile.name = el.find('tr:nth-child(1) > td:nth-child(4)').text().trim()
			profile.department = el.find('tr:nth-child(2) > td:nth-child(2)').text().trim()
			profile.grade = el.find('tr:nth-child(2) > td:nth-child(4)').text().trim()
			profile.sex = el.find('tr:nth-child(3) > td:nth-child(2)').text().trim()
			profile.status = el.find('tr:nth-child(3) > td:nth-child(4)').text().trim()
			profile.idNumber = el.find('tr:nth-child(4) > td:nth-child(2)').text().trim()
			profile.birthday = el.find('tr:nth-child(4) > td:nth-child(4)').text().trim()
			profile.english = el.find('tr:nth-child(5) > td:nth-child(2)').text().trim()
			profile.address = el.find('tr:nth-child(6) > td:nth-child(2)').text().trim()
			profile.identity = el.find('tr:nth-child(7) > td:nth-child(2)').text().trim()
			console.log(profile)
			return {
				statusCode: 200,
				body: JSON.stringify(profile),
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Headers': 'Content-Type',
				},
			}
	}
}
