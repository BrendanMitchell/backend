import * as Sequelize from 'sequelize';

import {ProductAttributes, ProductInstance} from './models/Product';

declare global {
  interface Models {
    sequelize: Sequelize.Sequelize;
    Sequelize: Sequelize.SequelizeStatic;
    products: Sequelize.Model<ProductInstance, ProductAttributes>;
  }
}
