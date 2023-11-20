import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Controller("Student")
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
   getStudents(): Promise<Student[]> {
    return this.studentService.findAll();
   }

  @Post()
  createStudent(@Body() StudentDto){
    return this.studentService.createStudent(StudentDto);
  }   

}
