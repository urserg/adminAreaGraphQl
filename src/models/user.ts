import {DataTypes, Model, Sequelize} from "@sequelize/core";

const getUserModel = (sequelize: Sequelize) => {

  class User extends Model {
    declare name: String
    declare avatarUrl: String

    static associate(models: any) {
      User.hasMany(models.Post)
    }
  }

  User.init({
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    avatarUrl: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: true,
    },
  }, {
    sequelize,
  });

  return User;
}

// User.associate = (models) => {
//   User.hasMany(models.Message, { onDelete: 'CASCADE' });
// };
//
// User.findByLogin = async (login) => {
//   let user = await User.findOne({
//     where: { username: login },
//   });
//
//   if (!user) {
//     user = await User.findOne({
//       where: { email: login },
//     });
//   }
//
//   return user;
// };

export default getUserModel;