import {Sequelize} from '@sequelize/core';
import getPostModel from "./post";
import getUserModel from "./user";

const sequelize = new Sequelize(
  'postgres://postgres:postgrespw@localhost:49154/postgres',
);

const models: Record<string, any> = {
  User: getUserModel(sequelize),
  Post: getPostModel(sequelize),
};

Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export {models, sequelize}