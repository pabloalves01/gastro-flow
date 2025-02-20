'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('contacts', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      corporate_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      trade_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      person_type: {
        type: Sequelize.ENUM('individual', 'company'),
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING(14),
        allowNull: true,
        unique: true,
      },
      cnpj: {
        type: Sequelize.STRING(18),
        allowNull: true,
        unique: true,
      },
      taxpayer: {
        type: Sequelize.ENUM('yes', 'no', 'exempt'), 
        allowNull: false,
      },
      state_registration: { 
        type: Sequelize.STRING,
        allowNull: true,
      },
      municipal_registration: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      contact_type: {
        type: Sequelize.ENUM('customer', 'supplier'),
        allowNull: false,
      },
      zip_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      state_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'states',
          key: 'id',
        },
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      delivery_address: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      neighborhood: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      complement: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      additional_phone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      website: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      email_nfe: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      contact_notes: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('contacts');
  },
};
