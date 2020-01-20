'use strict';

const assert = require('assert').strict;
const { Bone, DataTypes } = require('../../..');
const { INTEGER, STRING, DATE, TEXT } = DataTypes;

class Note extends Bone {};
Note.init({
  id: INTEGER,
  title: STRING,
  body: TEXT,
  createdAt: DATE,
});

describe('=> Data Types', () => {
  it('define attributes', async () => {
    assert.deepEqual(Note.attributes.title, {
      allowNull: true,
      columnName: 'title',
      dataType: 'varchar',
      jsType: String,
      type: STRING,
      defaultValue: null,
    });
  });

  it('validate attributes', async () => {

  });
});
