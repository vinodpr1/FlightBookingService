'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.addColumn(
      'Bookings', 
      'price',
      { 
        type: Sequelize.INTEGER,
        allowNull:false,
        defaultValue:1
      });

      await queryInterface.addColumn(
        'Bookings', 
        'totalSeat',
        { 
          type: Sequelize.INTEGER,
          allowNull:false,
          defaultValue:1
        });

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.removeColumn('Booking','price');
    await queryInterface.removeColumn('Booking','totalSeat');
  }
};
