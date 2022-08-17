import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response) {

  CreateCourseService.execute({
    name: "Node js",
    duration: 10,
    educator: "Anderson"
  });

  return response.json({message:"Ola Mundo!"});
}