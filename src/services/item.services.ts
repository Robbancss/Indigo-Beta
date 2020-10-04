import mongoose, { Mongoose } from 'mongoose';
import {IItem} from '../interfaces/IItem';
import Item from '../models/items';

/**
 * Returns all elem in db
 */
async function queryAllItem(): Promise<IItem[]> {
  return Item.find()
      .then((data: IItem[]) => {
        return data;
      })
      .catch((error: Error) => {
        throw error;
      });
}

/**
 * Returns one Item by ID
 * @param {number} id ID of the item
 */
async function gueryItemByID(id: mongoose.Types.ObjectId): Promise<IItem> {
  return Item.findById(id).then((data: any) => {
    return data;
  }).catch((error: Error) => {
    throw error;
  });
}

/**
 * Creates a new item in the db and returns it with a new
 * @param {IItem} item Add this to the db
 */
async function addNewItem(item: IItem): Promise<IItem> {
  return Item.create(item)
      .then((data: IItem) => {
        return data;
      })
      .catch((error: Error) => {
        throw error;
      });
}

export default {
  queryAllItem,
  addNewItem,
  gueryItemByID,
};
