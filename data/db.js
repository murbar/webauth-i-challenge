const knex = require('knex');

const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);
const usersTable = 'users';

const getAllRecords = tablename => async () => {
  const records = await db(tableName);
  return records;
};

const getAllRecordsBy = tableName => async filter => {
  // TODO throw error if no filter
  const records = await db(tableName).where(filter);
  return records;
};

const getRecordBy = tableName => async filter => {
  // TODO throw error if no filter
  const record = await db(tableName)
    .where(filter)
    .first();
  return record;
};

const addRecord = tableName => async record => {
  const [newRecordId] = await db(tableName).insert(record);
  const newRecord = await db(tableName).where({ id: newRecordId });
  return newRecord;
};

const updateRecord = tableName => async (id, record) => {
  const updatedCount = await db(tableName)
    .where({ id })
    .update(record);
  return updatedCount;
};

const deleteRecord = tableName => async id => {
  const deletedCount = await db(tableName)
    .where({ id })
    .del();
  return deletedCount;
};

const getUsers = async () => {
  const users = await db(usersTable).select('id', 'username', 'first_name', 'last_name', 'email');
  return users;
};

module.exports = {
  users: {
    // getAll: getRecords(usersTable),
    getAll: getUsers,
    getAllBy: getAllRecordsBy(usersTable),
    getBy: getRecordBy(usersTable),
    create: addRecord(usersTable),
    update: updateRecord(usersTable),
    del: deleteRecord(usersTable)
  }
};
