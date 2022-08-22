
import {Response,Request} from 'express'
import { ListCategoryUseCase } from './ListCategoryUseCase';



export class ListCategoryController{

  constructor(private listCategoryUseCase:ListCategoryUseCase){}

  handle(response:Response,resqueste:Request){

    const all = this.listCategoryUseCase.execute();

    return response.status(201).json(all);
  }

}