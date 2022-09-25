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
    case 'POST':
      if (!event.body) {
        return {
          statusCode: 400,
          body: JSON.stringify({ message: 'Bad Request' }),
          headers
        }
      }
      const body = JSON.parse(event.body)
      console.log(body)
      const res = await fetch(
        null,
        'https://m.ntu.edu.tw/service/courseQuery/Handler2.ashx?' +
          new URLSearchParams(body)
      )
      const json = await res.json()
      console.log(json)
      return {
        statusCode: 200,
        body: JSON.stringify(json),
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
