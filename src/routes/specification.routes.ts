import { Router } from "express";
import { SpecificationRepositor } from "../modules/cars/repositories/SpecificationRepositor";
import { CreateSpecificationService } from "../modules/cars/Services/CreateSpecificationService";

const specificationRoutes = Router();

const specificationRoutesRepository = new SpecificationRepositor();

specificationRoutes.post("/", (request, response) => {

  const { name, description } = request.body;

  const createSpecificationService = new CreateSpecificationService(specificationRoutesRepository);
  
  createSpecificationService.execute({ name, description })

  return response.status(201).json({ message: "sucesso!" });

});



export { specificationRoutes };