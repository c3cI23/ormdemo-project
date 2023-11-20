import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @Inject('STUDENT_REPOSITORY')
    private studentRepository: Repository<Student>,
  ) {}

  async findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

   async createStudent(StudentDto) {
    return this.studentRepository.save(StudentDto);
   }

  
}
