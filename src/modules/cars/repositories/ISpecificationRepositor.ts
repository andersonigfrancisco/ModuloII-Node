import { Specification } from "../model/Specification";


interface ICreateSpecificationDTO{
  name:string;
  description:string;
}


interface ISpecificationRepositor{

  findByName(name:string):Specification;
  create({name,description}:ICreateSpecificationDTO):void

}

export {ISpecificationRepositor,ICreateSpecificationDTO}