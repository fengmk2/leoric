import { strict as assert } from 'assert';
import { Bone, Collection, connect } from '../..';

describe('=> Collection (TypeScript)', function() {
  class User extends Bone {
    id: number;
    createdAt: Date;
    deletedAt: Date;
    email: string;
    nickname: string;
    status: number;
  }

  before(async function() {
    Bone.driver = null;
    await connect({
      dialect: 'sqlite',
      database: '/tmp/leoric.sqlite3',
      models: [ User ]
    });
  });

  it('collection.save()', async function() {
    const users = new Collection(
      new User({ nickname: 'siri', email: 'siri@me.com', status: 0 }),
      new User({ nickname: 'xiaoai', email: 'xiaoai@mi.com', status: 1 })
    );
    await users.save();
    assert.equal(await User.count(), 2);
  });
});
