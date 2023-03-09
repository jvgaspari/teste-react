import type { NextApiRequest, NextApiResponse } from 'next'
import data from './db.json'

export type Products = {
  id: number,
  title: string,
  price: number,
  image: string
}

export type IData = {
  products: Products[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IData>
) {
  res.status(200).json(data)
}
