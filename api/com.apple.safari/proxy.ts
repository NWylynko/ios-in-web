import { createProxy } from 'http-proxy'
import type { ErrorCallback } from 'http-proxy'
import type { VercelRequest, VercelResponse } from '@vercel/node';

const proxy = createProxy({})

export default function handler(req: VercelRequest, res: VercelResponse) {

  const callback: ErrorCallback = (err, req, res, target) => {
    console.log(err)
    console.log(target)
  }

  proxy.web(req, res, { target: "https://nick.wylynko.com" }, callback)

}