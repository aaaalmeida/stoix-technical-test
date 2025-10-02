import { IsNotEmpty, IsOptional, IsString, MinLength, MaxLength, IsBoolean } from "class-validator"

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  taskname: string

  @IsOptional()
  @IsString()
  @MaxLength(500)
  description?: string

  @IsBoolean()
  completed: boolean
}