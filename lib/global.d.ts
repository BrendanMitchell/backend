import * as Sequelize from 'sequelize';

import {EmployeeAttributes, EmployeeInstance} from './models/Employee';
import {ProductAttributes, ProductInstance} from './models/Product';

declare global {
  interface Models {
    sequelize: Sequelize.Sequelize;
    Sequelize: Sequelize.SequelizeStatic;
    products: Sequelize.Model<ProductInstance, ProductAttributes>;
    employees: Sequelize.Model<EmployeeInstance, EmployeeAttributes>;
  }
}
