import { Request, RequestHandler, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../../share/catchAsync'
import sendResponse from '../../../share/sendResponse'
import { IBook } from './book.interface'
import { bookService } from './book.service'

const createBook: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const book = req.body
    const result = await bookService.createBook(book)

    sendResponse<IBook>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book created successfully!',
      data: result,
    })
  },
)
const getBooks = catchAsync(async (req: Request, res: Response) => {
  const result = await bookService.getBooks()

  sendResponse<IBook[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book retrieved successfully !',
    data: result,
  })
})

const getBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await bookService.getBook(id)

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book retrieved successfully !',
    data: result,
  })
})

const updateBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const payload = req.body
  const result = await bookService.updateBook(id, payload)
  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book Update successfully !',
    data: result,
  })
})
const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id

  const result = await bookService.deleteBook(id)

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book Delete successfully !',
    data: result,
  })
})
export const bookController = {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
}
