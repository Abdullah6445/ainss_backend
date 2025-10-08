import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsOptional, IsString } from "class-validator";

export class CreateUserDto {


  @ApiProperty({ example: "Abdullah" })
  @IsString()
  name: string;

  @ApiProperty({ example: 24 })
  @IsInt()
  age: number;


  @ApiProperty({ example: "father name" })
  @IsString()
  fatherName: string;

  @ApiProperty({ example: "96867" })
  @IsString()
  @IsOptional()
  contact: string;

  @ApiProperty({ example: "96867" })
  @IsString()
  @IsOptional()
  emergencyContact: string;


  // @ApiProperty({ enum: Role, example: Role.ADMIN })
  // @IsEnum(Role)
  // role: Role;

}
