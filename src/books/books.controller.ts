// books.controller.ts
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dtos/create-book.dto';

@ApiTags('books')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @ApiOperation({ summary: 'Create a book' })
  @ApiBody({ type: CreateBookDTO, description: 'Book to be created' })
  create(@Body() book: CreateBookDTO) {
    return this.booksService.create(book);
  }

  @Get()
  @ApiOperation({ summary: 'Get all books' })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Limit the number of books returned',
  })
  @ApiQuery({
    name: 'start',
    required: false,
    description: 'Starting index for the books returned',
  })
  findAll(@Query('limit') limit: number, @Query('start') start: number) {
    return this.booksService.findAll(limit, start);
  }
}
