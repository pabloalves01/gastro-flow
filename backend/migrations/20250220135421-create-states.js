'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('states', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      initials: {
        type: Sequelize.STRING,
        allowNull: false,
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
        defaultValue: null,
      },
    });
    await queryInterface.bulkInsert('states', [
      { id: 1, name: 'Acre', initials: 'AC', created_at: new Date(), updated_at: new Date() },
      { id: 2, name: 'Alagoas', initials: 'AL', created_at: new Date(), updated_at: new Date() },
      { id: 3, name: 'Amapá', initials: 'AP', created_at: new Date(), updated_at: new Date() },
      { id: 4, name: 'Amazonas', initials: 'AM', created_at: new Date(), updated_at: new Date() },
      { id: 5, name: 'Bahia', initials: 'BA', created_at: new Date(), updated_at: new Date() },
      { id: 6, name: 'Ceará', initials: 'CE', created_at: new Date(), updated_at: new Date() },
      { id: 7, name: 'Distrito Federal', initials: 'DF', created_at: new Date(), updated_at: new Date() },
      { id: 8, name: 'Espírito Santo', initials: 'ES', created_at: new Date(), updated_at: new Date() },
      { id: 9, name: 'Goiás', initials: 'GO', created_at: new Date(), updated_at: new Date() },
      { id: 10, name: 'Maranhão', initials: 'MA', created_at: new Date(), updated_at: new Date() },
      { id: 11, name: 'Mato Grosso', initials: 'MT', created_at: new Date(), updated_at: new Date() },
      { id: 12, name: 'Mato Grosso do Sul', initials: 'MS', created_at: new Date(), updated_at: new Date() },
      { id: 13, name: 'Minas Gerais', initials: 'MG', created_at: new Date(), updated_at: new Date() },
      { id: 14, name: 'Pará', initials: 'PA', created_at: new Date(), updated_at: new Date() },
      { id: 15, name: 'Paraíba', initials: 'PB', created_at: new Date(), updated_at: new Date() },
      { id: 16, name: 'Paraná', initials: 'PR', created_at: new Date(), updated_at: new Date() },
      { id: 17, name: 'Pernambuco', initials: 'PE', created_at: new Date(), updated_at: new Date() },
      { id: 18, name: 'Piauí', initials: 'PI', created_at: new Date(), updated_at: new Date() },
      { id: 19, name: 'Rio de Janeiro', initials: 'RJ', created_at: new Date(), updated_at: new Date() },
      { id: 20, name: 'Rio Grande do Norte', initials: 'RN', created_at: new Date(), updated_at: new Date() },
      { id: 21, name: 'Rio Grande do Sul', initials: 'RS', created_at: new Date(), updated_at: new Date() },
      { id: 22, name: 'Rondônia', initials: 'RO', created_at: new Date(), updated_at: new Date() },
      { id: 23, name: 'Roraima', initials: 'RR', created_at: new Date(), updated_at: new Date() },
      { id: 24, name: 'Santa Catarina', initials: 'SC', created_at: new Date(), updated_at: new Date() },
      { id: 25, name: 'São Paulo', initials: 'SP', created_at: new Date(), updated_at: new Date() },
      { id: 26, name: 'Sergipe', initials: 'SE', created_at: new Date(), updated_at: new Date() },
      { id: 27, name: 'Tocantins', initials: 'TO', created_at: new Date(), updated_at: new Date() },
    ])

  },

  async down(queryInterface) {
    await queryInterface.dropTable('states')
  }
};
