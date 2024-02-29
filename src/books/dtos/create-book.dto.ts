// create-book.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBookDTO {
  @ApiProperty({
    example: 'The Great Gatsby',
    description: 'The title of the book.',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: 'F. Scott Fitzgerald',
    description: 'The author of the book.',
  })
  @IsNotEmpty()
  @IsString()
  author: string;

  @ApiProperty({
    example: 1925,
    description: 'The year the book was published.',
  })
  @IsNotEmpty()
  @IsNumber()
  year: number;

  @ApiProperty({ example: 'First', description: 'The edition of the book.' })
  @IsNotEmpty()
  @IsString()
  edition: string;
}
