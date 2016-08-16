import BaseModel from './base';

import * as DataLoader from 'dataloader';

export default class User extends BaseModel  {
  userLoader: any;
  public getUsers() {
    return this.collection.find().toArray();
  }

  public getCachedUsers() {
    if (!this.userLoader) {
      this.userLoader = new DataLoader((param) => {
        return Promise.all([this.collection.find().toArray()]);
      });
    }
    return this.userLoader.load(0);
  }

  public fixtures() {
    this.collection.count({}, (err, num) => {
      if (num === 0) {
        this.collection.insert({ _id: this.random.id(), name: 'Tomas Trescak '});
      }
    });
  }
}
