import { fetch } from 'node-fetch-cookies'
import type { Handler } from '@netlify/functions'

export const handler: Handler = async (event, context) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS'
  }
  switch (event.httpMethod) {
    case 'OPTIONS':
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'This was a preflight request' }),
        headers
      }
    case 'GET':
      const ser_no = event.queryStringParameters?.ser_no?.split(',') || []
      const data: any[] = []
      for (const ser of ser_no) {
        const res = await fetch(
          null,
          `http://if177.aca.ntu.edu.tw/coursetake3/index.php/ajax/get-coudata/${ser}/`
        )
        const json = await res.json()
        data.push(json)
      }
      return {
        statusCode: 200,
        body: JSON.stringify(data),
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
