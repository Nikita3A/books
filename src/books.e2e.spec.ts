import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('BooksController (e2e)', () => {
  let app;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/books (POST)', () => {
    return request(app.getHttpServer())
      .post('/books')
      .send({
        name: 'Test Book',
        author: 'Test Author',
        year: 2024,
        edition: 'Test Edition',
      })
      .expect(201);
  });

  it('/books (GET)', () => {
    return request(app.getHttpServer())
      .get('/books')
      .expect(200)
      .then((response) => {
        expect(response.body.length).toBeGreaterThan(0);
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
