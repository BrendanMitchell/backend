import * as Sequelize from 'sequelize';

import {tableMeta, tables} from '../constants';

export interface ProductAttributes {
  id?: string;
  lookupCode?: string;
  count?: number;
  createdOn?: Date;
}

export interface ProductInstance extends Sequelize.Instance<ProductAttributes> {
  id: string;
  lookupCode: string;
  count: number;
  createdOn: Date;
}

export default (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes,
) => {
  const Product = sequelize.define(tables.products, {
    ...tableMeta,
    lookupCode: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'lookupcode',
    },
    count: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  });

  return Product;
};
