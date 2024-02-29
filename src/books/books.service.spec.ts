// books.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Book } from './models/book.entity';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dtos/create-book.dto';

describe('BooksService', () => {
  let service: BooksService;
  let save: jest.Mock;
  let find: jest.Mock;

  beforeEach(async () => {
    save = jest.fn();
    find = jest.fn();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BooksService,
        {
          provide: getRepositoryToken(Book),
          useValue: { save, find },
        },
      ],
    }).compile();

    service = module.get<BooksService>(BooksService);
  });

  // Add more tests here

  it('should create a book', async () => {
    const dto: CreateBookDTO = {
      name: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: 1925,
      edition: 'First',
    };
    const book: Book = {
      id: 1,
      ...dto,
    };

    save.mockResolvedValue(book);
    const result = await service.create(dto);

    expect(result).toEqual(book);
    expect(save).toHaveBeenCalledWith({
      name: dto.name,
      author: dto.author,
      year: dto.year,
      edition: dto.edition,
    });
  });

  it('should find all books with limit and start', async () => {
    const result = [];
    find.mockResolvedValue(result);
    expect(await service.findAll(10, 0)).toEqual(result);
    expect(find).toHaveBeenCalledWith({ skip: 0, take: 10 });
  });
});
