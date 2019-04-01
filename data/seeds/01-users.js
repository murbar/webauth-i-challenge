const faker = require('faker');
const bcrypt = require('bcryptjs');

const createUser = () => ({
  username: faker.internet.userName(),
  password: bcrypt.hashSync('password', 4),
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  email: faker.internet.email()
});

const buildUsers = (count = 10) => {
  const users = [];
  for (let i = 0; i < count; i++) {
    users.push(createUser());
  }
  console.log(users);
  return users;
};

exports.seed = function(knex) {
  return knex('users').insert(buildUsers());
};
