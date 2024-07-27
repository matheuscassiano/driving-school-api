import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DrivingClass } from '../driving-class/entities/driving-class.entity';
import { CourseService } from './course.service';
import { Course } from './entities/course.entity';
import { HttpException } from '@nestjs/common';
import { CourseDto } from './dtos/course.dto';

const mockCourseRepository = () => ({
  find: jest.fn(),
  findOneBy: jest.fn(),
  save: jest.fn(),
  update: jest.fn(),
  softDelete: jest.fn(),
});

const mockDrivingClassRepository = () => ({
  find: jest.fn(),
});

describe('CourseService', () => {
  let service: CourseService;
  let courseRepository;
  let drivingClassRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CourseService,
        {
          provide: getRepositoryToken(Course),
          useValue: mockCourseRepository(),
        },
        {
          provide: getRepositoryToken(DrivingClass),
          useValue: mockDrivingClassRepository(),
        },
      ],
    }).compile();

    service = module.get<CourseService>(CourseService);
    courseRepository = module.get<Repository<Course>>(
      getRepositoryToken(Course),
    );
    drivingClassRepository = module.get<Repository<DrivingClass>>(
      getRepositoryToken(DrivingClass),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of courses', async () => {
      const result = [{ id: 1, name: 'Course 1' }];
      jest.spyOn(courseRepository, 'find').mockResolvedValue(result);

      expect(await service.findAll()).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return a single course', async () => {
      const result = { id: 1, name: 'Course 1' };
      jest.spyOn(courseRepository, 'findOneBy').mockResolvedValue(result);

      expect(await service.findOne(1)).toBe(result);
    });
  });

  describe('create', () => {
    it('should create and return a course', async () => {
      const createData: CourseDto = {
        name: 'Course 1',
        description: '',
        startDate: undefined,
        endDate: undefined,
        isActive: false,
        schoolId: 0,
      };
      const result = { id: 1, ...createData };
      jest.spyOn(courseRepository, 'save').mockResolvedValue(result);

      expect(await service.create(createData)).toEqual({
        user: result,
        message: 'Curso cadastrado com sucesso!',
      });
    });

    it('should throw an error if unable to create a course', async () => {
      jest.spyOn(courseRepository, 'save').mockRejectedValue(new Error());

      await expect(
        service.create({
          name: 'Course 1',
          description: '',
          startDate: undefined,
          endDate: undefined,
          isActive: false,
          schoolId: 0,
        }),
      ).rejects.toThrow(HttpException);
    });
  });

  describe('update', () => {
    it('should update and return a course', async () => {
      const updateData: CourseDto = {
        name: 'Updated Course',
        description: '',
        startDate: undefined,
        endDate: undefined,
        isActive: false,
        schoolId: 0,
      };
      const existingCourse = { id: 1, name: 'Course 1' };
      jest
        .spyOn(courseRepository, 'findOneBy')
        .mockResolvedValue(existingCourse);
      jest.spyOn(courseRepository, 'update').mockResolvedValue({});

      expect(await service.update(1, updateData)).toEqual({
        user: existingCourse,
        message: 'Curso atualizado com sucesso!',
      });
    });

    it('should throw an error if course not found', async () => {
      jest.spyOn(courseRepository, 'findOneBy').mockResolvedValue(null);

      await expect(
        service.update(1, {
          name: 'Updated Course',
          description: '',
          startDate: undefined,
          endDate: undefined,
          isActive: false,
          schoolId: 0,
        }),
      ).rejects.toThrow(HttpException);
    });
  });

  describe('delete', () => {
    it('should delete and return a course', async () => {
      const existingCourse = { id: 1, name: 'Course 1' };
      jest
        .spyOn(courseRepository, 'findOneBy')
        .mockResolvedValue(existingCourse);
      jest.spyOn(courseRepository, 'softDelete').mockResolvedValue({});

      expect(await service.delete(1)).toEqual({
        user: existingCourse,
        message: 'Curso deletado com sucesso!',
      });
    });

    it('should throw an error if course not found', async () => {
      jest.spyOn(courseRepository, 'findOneBy').mockResolvedValue(null);

      await expect(service.delete(1)).rejects.toThrow(HttpException);
    });
  });

  describe('findLeasons', () => {
    it('should return an array of driving classes', async () => {
      const result = [{ id: 1, course: { id: 1 }, teacher: {}, vehicle: {} }];
      jest.spyOn(drivingClassRepository, 'find').mockResolvedValue(result);

      expect(await service.findLeasons(1)).toBe(result);
    });
  });
});
