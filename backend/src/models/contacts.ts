import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/database";
import States from "./states";

class Contacts extends Model {
  public id!: number;
  public corporate_name!: string;
  public trade_name!: string;
  public person_type!: "individual" | "company";
  public cpf!: string | null;
  public cnpj!: string | null;
  public taxpayer!: "yes" | "no" | "exempt";
  public state_registration!: string | null;
  public municipal_registration!: string | null;
  public contact_type!: "customer" | "supplier";
  public zip_code!: string;
  public city!: string;
  public state_id!: number;
  public address!: string;
  public delivery_address!: string | null;
  public neighborhood!: string;
  public number!: string;
  public complement!: string | null;
  public phone!: string | null;
  public additional_phone!: string | null;
  public website!: string | null;
  public email!: string;
  public email_nfe!: string | null;
  public contact_notes!: string | null;
  public active!: boolean;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
  public readonly deleted_at!: Date | null;
}

Contacts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    corporate_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    trade_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    person_type: {
      type: DataTypes.ENUM("individual", "company"),
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING(14),
      allowNull: true,
      defaultValue: null,
    },
    cnpj: {
      type: DataTypes.STRING(18),
      allowNull: true,
      defaultValue: null,
    },
    taxpayer: {
      type: DataTypes.ENUM("yes", "no", "exempt"),
      allowNull: false,
    },
    state_registration: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    municipal_registration: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    contact_type: {
      type: DataTypes.ENUM("customer", "supplier"),
      allowNull: false,
    },
    zip_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    delivery_address: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    neighborhood: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complement: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    additional_phone: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email_nfe: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    contact_notes: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    obs: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    sequelize,
    modelName: "contacts",
    tableName: "contacts",
    timestamps: true,
    underscored: true,
    paranoid: true,
  }
);
Contacts.belongsTo(States, { foreignKey: "state_id", as: "state" });

export default Contacts;
