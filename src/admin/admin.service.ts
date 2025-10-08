import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAdminDto } from './dto/create-admin.dto';


@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService){}

  // async create(createAdminDto: CreateAdminDto) {
  //   const admin = await this.prisma.admin.create({
  //     data: {
  //       user: {
  //         create: {
  //           name: "Abdullah",
  //           age: 24,
  //           fatherName: "",
  //           contact: "24234234",
  //           role: 'ADMIN'
  //         },
  //       },
  //       email: "abdullah@gmail.com",
  //       password: "ab123"
  //     },
  //     include: {
  //       user: true
  //     }
  //   });

  //   return {
  //   code: HttpStatus.CREATED,
  //   message: 'Admin created successfully',
  //   data: admin,
 
  //   }
  // }


  async create(createAdminDto : CreateAdminDto){
    
    
    
    const admin = await this.prisma.admin.create({
      data: {
        user: {
          create: {
            
        name: "",
        age: 1,
        fatherName: "",
        contact: "",
        role: 'ADMIN'
      
          
        },},
        email: "admin",
        password: "adsad",
      },
      include: {
        user: true
      }
    });

    return {
      message: "added",
      data: admin
    }
    

  }

  
  // create(createAdminDto: CreateAdminDto) {
  //   return 'This action adds a new admin';
  // }

  

  // findAll() {
  //   return `This action returns all admin`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} admin`;
  // }

  // update(id: number, updateAdminDto: UpdateAdminDto) {
  //   return `This action updates a #${id} admin`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} admin`;
  // }
}
