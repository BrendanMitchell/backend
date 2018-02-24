import {NextFunction, Request, Response} from 'express';

import {getModels} from '../models';

interface Obj {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  [propName: string]: any;
}
const sanatize = ({id, createdAt, updatedAt, ...rest}: Obj) => rest;

export default {
  async getAll(req: Request, res: Response, next: NextFunction) {
    const models = getModels();
    const products = await models.product.findAll();
    return res.status(200).json(products);
  },
  async getById(req: Request, res: Response, next: NextFunction) {
    const models = getModels();
    const productId = req.params.id;
    const product = await models.product.findOne({where: {id: productId}});
    return res.status(200).json(product);
  },
  async getByLookupCode(req: Request, res: Response, next: NextFunction) {
    const models = getModels();
    const productLookupCode = req.params.lookupCode;
    const product = await models.product.findOne({
      where: {lookupCode: productLookupCode},
    });
    return res.status(200).json(product);
  },
  async create(req: Request, res: Response, next: NextFunction) {
    const models = getModels();
    const product = await models.product.create(sanatize(req.body));
    return res.status(201).json(product);
  },
  async update(req: Request, res: Response, next: NextFunction) {
    const models = getModels();
    const productId = req.params.id;

    await models.product.update(sanatize(req.body), {
      where: {id: productId},
    });
    const updatedProduct = await models.product.findOne({
      where: {id: productId},
    });

    return res.status(200).json(updatedProduct);
  },
  async delete(req: Request, res: Response, next: NextFunction) {
    const models = getModels();
    const productId = req.params.id;
    await models.product.destroy({where: {id: productId}});
    return res.status(200).end();
  },
};
