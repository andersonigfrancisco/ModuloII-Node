import { Specification } from "../model/Specification";


interface ICreateSpecificationDTO{
  name:string;
  description:string;
}


interface ISpecificationRepositor{

  
  create({name,description}:ICreateSpecificationDTO):void

}

export {ISpecificationRepositor,ICreateSpecificationDTO}