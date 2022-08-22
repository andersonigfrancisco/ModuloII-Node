import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoryController } from "./ListCategoryController";
import {ListCategoryUseCase } from "./ListCategoryUseCase";

const categoriesRepository = new CategoriesRepository();

const listCateCategoryUseCase = new ListCategoryUseCase(categoriesRepository);

const listCatetegoryController = new ListCategoryController(listCateCategoryUseCase);

export{listCatetegoryController}