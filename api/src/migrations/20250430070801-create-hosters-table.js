
'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('hosters', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      hostId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      listingUrl: {
        type: Sequelize.STRING,
        allowNull: false
      },
      hostUrl: {
        type: Sequelize.STRING,
        allowNull: false
      },
      hostSince: {
        type: Sequelize.DATE,
        allowNull: false
      },
      hostName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      hostLocation: {
        type: Sequelize.STRING,
        allowNull: false
      },
      neighburhood: {
        type: Sequelize.STRING,
        allowNull: false
      },
      roomType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      propertyType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      latitude: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      longitude: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      bedrooms: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      minimumNights: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      beds: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      reviewScoresRating: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      numberOfReviews: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      availability30: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      availability60: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      availability90: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      availability365: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      accommodates: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      numberOfReviewsLtm: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('hosters')
  }
}
