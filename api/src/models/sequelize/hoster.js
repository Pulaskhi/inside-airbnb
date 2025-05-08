module.exports = function (sequelize, DataTypes) {
    const Model = sequelize.define('Hoster',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        hostId: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        listingUrl: {
          type: DataTypes.STRING,
          allowNull: false
        },
        hostUrl: {
          type: DataTypes.STRING,
          allowNull: false
        },
        hostSince: {
          type: DataTypes.DATE,
          allowNull: false
        },
        hostName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        hostLocation: {
          type: DataTypes.STRING,
          allowNull: false
        },
        neighburhood: {
          type: DataTypes.STRING,
          allowNull: false
        },
        roomType: {
          type: DataTypes.STRING,
          allowNull: false
        },
        propertyType: {
          type: DataTypes.STRING,
          allowNull: false
        },
        bedrooms: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        minimumNights: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        latitude: {
          type: DataTypes.FLOAT,
          allowNull: false
        },
        longitude: {
          type: DataTypes.FLOAT,
          allowNull: false
        },
        beds: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        reviewScoresRating: {
          type: DataTypes.FLOAT,
          allowNull: false
        },
        numberOfReviews: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        availability30: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        availability60: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        availability90: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        availability365: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        price: {
          type: DataTypes.FLOAT,
          allowNull: false
        },
        accommodates: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        numberOfReviewsLtm: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        createdAt: {
          type: DataTypes.DATE,
          get () {
            return this.getDataValue('createdAt')
              ? this.getDataValue('createdAt').toISOString().split('T')[0]
              : null
          }
        },
        updatedAt: {
          type: DataTypes.DATE,
          get () {
            return this.getDataValue('updatedAt')
              ? this.getDataValue('updatedAt').toISOString().split('T')[0]
              : null
          }
        }
      }, {
        sequelize,
        tableName: 'hosters',
        timestamps: true,
        paranoid: true,
        indexes: [
          {
            name: 'PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [
              { name: 'id' }
            ]
          }
        ]
      }
    )
  
    Model.associate = function (models) {
  
    }
  
    return Model
  }