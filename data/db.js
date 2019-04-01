const knex = require('knex');

const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);
const usersTable = 'users';

const getRecords = tableName => async () => {
  const records = await db(tableName);
  return records;
};

const getRecordById = tableName => async id => {
  const record = await db(tableName)
    .where({ id })
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

module.exports = {
  users: {
    getAll: getRecords(usersTable),
    getById: getRecordById(usersTable),
    create: addRecord(usersTable),
    update: updateRecord(usersTable),
    del: deleteRecord(usersTable)
  }
};
