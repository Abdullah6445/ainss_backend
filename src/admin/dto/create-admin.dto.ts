import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsInt, IsOptional, IsString } from "class-validator";
import { Role } from "generated/prisma";

export class CreateAdminDto {


  // @ApiProperty({example: "Abdullah"})


  @ApiProperty({example: "Abdulah"})
  @IsString()
  name: string;

  
  @ApiProperty({example: 24})
  @IsInt()
  age: number;

  @ApiProperty({example: "Abdulah"})
  @IsString()
  fatherName : string;

  @ApiProperty({example: "121231" , required: false})
  @IsString()
  @IsOptional()
  contact : string;
  
  @ApiProperty({example: "121231" , required: false})
  @IsString()
  @IsOptional()
  emergencyContact : string;

  @ApiProperty({enum: Role, example: Role.ADMIN})
  @IsEnum(Role)
  role : Role;

  @ApiProperty({example: "abdullah@gmail.com"})
  @IsEmail()
  email: String





}
