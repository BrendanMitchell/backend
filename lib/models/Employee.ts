import * as Sequelize from 'sequelize';

import {tableMeta, tables} from '../constants';
import {role} from './enums/role';

export interface EmployeeAttributes {
  id?: string;
  firstName?: string;
  lastName?: string;
  employeeId?: number;
  active?: boolean;
  role?: role;
  manager: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface EmployeeInstance
  extends Sequelize.Instance<EmployeeAttributes> {
  id: string;
  firstName: string;
  lastName: string;
  employeeId: number;
  active: boolean;
  role: role;
  managerId: string;
  password: string;
}

export default (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes,
) => {
  const Product = sequelize.define(
    tables.employees,
    {
      ...tableMeta,
      firstName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'first_name',
        defaultValue: '',
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'last_name',
        defaultValue: '',
      },
      employeeId: {
        allowNull: false,
        type: DataTypes.NUMBER,
        field: 'employee_id',
        defaultValue: 0,
      },
      active: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      role: {
        allowNull: false,
        type: DataTypes.ENUM(
          role.GENERAL_MANANGER,
          role.SHIFT_MANAGER,
          role.CASHIER,
        ),
      },
      managerId: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'manager_id',
      },
      password: {
        allowNull: true,
        type: DataTypes.STRING,
      },
    },
    {
      classMethods: {
        associate(models: Models) {
          Product.belongsTo(models.employees);
        },
      },
    },
  );

  return Product;
};
