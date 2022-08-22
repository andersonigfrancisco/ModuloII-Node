import { Specification } from "../model/Specification";
import { ISpecificationRepositor,ICreateSpecificationDTO } from "./ISpecificationRepositor";





export class SpecificationRepositor implements ISpecificationRepositor{

  private specification:Specification[];

  constructor(){
    this.specification = [];
  }

  create({name,description}:ICreateSpecificationDTO):void{

    const categorie = new Specification();

    Object.assign(categorie,{
      name,
      description,
      created_at:new Date()
    })
  
    this.specification.push(categorie)

  }

  findByName(name:string):Specification{

    const specification = this.specification.find(specification=>specification.name===name);

    return specification;
  }
}

