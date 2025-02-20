// src/models/user.ts
import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/database";

class Users extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public created_at!: Date;
  public updated_at!: Date;
  public deleted_at!: Date | null;
}

Users.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "users",
    tableName: "users", // Nome da tabela no banco de dados
    timestamps: true, // Gerencia createdAt e updatedAt automaticamente
    underscored: true, // Usa snake_case para os nomes de coluna
  }
);

export default Users;
