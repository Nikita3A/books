// books.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './models/book.entity';
import { CreateBookDTO } from './dtos/create-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  create(bookDto: CreateBookDTO) {
    const book = new Book();
    book.name = bookDto.name;
    book.author = bookDto.author;
    book.year = bookDto.year;
    book.edition = bookDto.edition;

    return this.booksRepository.save(book);
  }

  findAll(limit: number, start: number) {
    return this.booksRepository.find({
      skip: start,
      take: limit,
    });
  }
}
