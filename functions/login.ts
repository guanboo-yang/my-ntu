import { fetch, CookieJar } from 'node-fetch-cookies'
import type { Handler } from '@netlify/functions'

export const handler: Handler = async (event, context) => {
	const headers = {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': 'Content-Type',
		'Access-Control-Allow-Methods': 'POST, OPTIONS',
	}
	switch (event.httpMethod) {
		case 'OPTIONS':
			return {
				statusCode: 200,
				body: 'This was a preflight request',
				headers,
			}
		case 'POST':
			if (!event.body) {
				return {
					statusCode: 400,
					body: 'Bad Request',
					headers,
				}
			}

			const cookieJar = new CookieJar()
			const body = JSON.parse(event.body)
			// await fetch(cookieJar, 'https://my.ntu.edu.tw/login.aspx', {
			await fetch(cookieJar, 'https://if163.aca.ntu.edu.tw/eportfolio/login.asp', {
				method: 'POST',
				headers: { 'content-type': 'application/x-www-form-urlencoded' },
				body: `user=${body.name}&pass=${body.pass}&Submit=%E7%99%BB%E5%85%A5`,
			})

			// get all cookies!
			// await fetch(cookieJar, 'https://if177.aca.ntu.edu.tw/qcaureg/stulogin.asp')

			return {
				statusCode: 200,
				body: JSON.stringify({
					cookies: [...cookieJar.cookiesValid(true)],
				}),
				headers,
			}
		default:
			return {
				statusCode: 405,
				body: 'Method Not Allowed',
				headers,
			}
	}
}
