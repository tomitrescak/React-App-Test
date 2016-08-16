import MongoConnector from '../connectors/mongo';
import { Collection } from 'mongodb';
import * as Random from 'meteor-random';

export default class BaseModel {

  protected connector: MongoConnector;
  protected random = Random;

  private _collectionName: string;
  private _collection: Collection;

  protected get collection(): Collection {
    if (!this._collection) {
      this._collection = this.connector.collection(this._collectionName);
    }
    return this._collection;
  }

  constructor(connector: MongoConnector, collectionName: string) {
    this.connector = connector;
    this._collectionName = collectionName;
  }
}
