// src/models/Transaction.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Transaction extends Model {
  public id!: number;
  public name!: string;
  public value!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Transaction.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    value: {
      type: DataTypes.DECIMAL(10, 2), // Para valores com decimais
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Transaction',
    tableName: 'Transactions', // Nome da tabela no banco de dados
    timestamps: true, // Gerencia createdAt e updatedAt automaticamente
  }
);

export default Transaction;
