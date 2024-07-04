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
          allowNull: true,
       }
      );

      await queryInterface.addColumn(
        'Bookings',
        'noOfSeats',
        {
           type: Sequelize.INTEGER,
           allowNull: true,
        },
       );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable('Bookings','price');
    await queryInterface.dropTable('Bookings','noOfSeats');

  }
};
