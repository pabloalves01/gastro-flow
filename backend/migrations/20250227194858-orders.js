'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return;
    await queryInterface.createTable('orders'), {
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      order_number: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
      },
      table_id: {
        type: Sequelize.UUID,
        allowNull: true, // Permite pedidos sem mesa (ex: balcão)
        references: { model: 'tables', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: true, // Permite pedidos automáticos sem garçom vinculado
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      status: {
        type: Sequelize.ENUM('pending', 'preparing', 'served', 'closed'),
        allowNull: false,
        defaultValue: 'pending',
      },
      total_price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0,
      },
      payment_status: {
        type: Sequelize.ENUM('pending', 'paid', 'canceled'),
        allowNull: false,
        defaultValue: 'pending',
      },
      payment_method: {
        type: Sequelize.ENUM('cash', 'credit_card', 'debit_card', 'pix'),
        allowNull: false,
        defaultValue: 'cash',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    }
  },

  async down(queryInterface) {
    return;
    await queryInterface.dropTable('orders');
  }
};
