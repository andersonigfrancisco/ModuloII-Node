import { ISpecificationRepositor } from "../repositories/ISpecificationRepositor";


interface IRequest {
  name: string;
  description: string;

}

export class CreateSpecificationService {

  constructor(private specificationRepositor: ISpecificationRepositor) {

  }

  execute({ name, description }: IRequest):void {

    const specificationAlreadExists = this.specificationRepositor.findByName(name);

    if (specificationAlreadExists)
      throw new Error("specification Already Exists!");
  
    this.specificationRepositor.create({ name, description });
  }

}

