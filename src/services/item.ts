import {IItem} from '../interfaces/IItem';
import Item from '../models/items';

/**
 * Should return all elem in db
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
};
