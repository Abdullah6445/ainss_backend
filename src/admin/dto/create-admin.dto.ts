import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString, ValidateNested } from "class-validator";
import { CreateUserDto } from "src/user/dto/create-user.dto";

export class CreateAdminDto {

  @ApiProperty({example: "abdullah@gmail.com"})
  @IsString()
  email: string;

  @ApiProperty({example: "password"})
  @IsString()
  password: string;

  @ApiProperty({type: CreateUserDto})
  @ValidateNested()
  @Type(()=>CreateUserDto)
  user: CreateUserDto;

  
  
  
  





}
