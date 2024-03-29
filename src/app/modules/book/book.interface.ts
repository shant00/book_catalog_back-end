import { Model } from 'mongoose'

export type IBook = {
  title: string
  author: string
  genre: string
  publicationDate: Date
  reviews: string[]
  createdBy?: string
}

export type BookModel = Model<IBook, Record<string, unknown>>
