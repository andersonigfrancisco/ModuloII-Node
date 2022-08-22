import {Response,Request} from 'express'
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

export class CreateCategoryController{

  constructor(private createCategoryUseCase:CreateCategoryUseCase){

  }

  handle(response:Response,resqueste:Request){

    const { name, description } = resqueste.body;

    
    this.createCategoryUseCase.execute({ name, description })

    return response.status(201).json({ message: "sucesso!" });
  }

}