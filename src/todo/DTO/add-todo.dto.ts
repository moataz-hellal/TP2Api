import { IsNotEmpty, MinLength } from 'class-validator';

export class addTodoDto {
  @IsNotEmpty({ message: 'Ce champ est obligatoire ' })
  @MinLength(3, { message: 'valeur trop courte , la taille minimale est 3' })
  name: string;
  @MinLength(10)
  description: string;
}
