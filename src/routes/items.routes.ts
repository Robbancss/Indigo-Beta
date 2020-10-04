import express, {Request, Response} from 'express';
import mongoose from 'mongoose';
import {IItem} from '../interfaces/IItem';
import ItemService from '../services/item.services';

// eslint-disable-next-line new-cap
export const itemsRouter = express.Router();

// GET items/
itemsRouter.get('/', async (req: Request, res: Response) => {
  try {
    const items: IItem[] = await ItemService.queryAllItem();

    res.status(200).send(items);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// GET items/:id
itemsRouter.get('/:id', async (req: Request, res: Response) => {
  // eslint-disable-next-line new-cap
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    const id: mongoose.Types.ObjectId = mongoose.Types.ObjectId(req.params.id);
    console.log(id);
    try {
      const item: IItem = await ItemService.gueryItemByID(id);
      res.status(200).send(item);
    } catch (error) {
      res.status(404).send(error.message);
    }
  } else {
    res.status(404).send('wrong id format');
  }
});

// POST items/
itemsRouter.post('/', async (req: Request, res: Response) => {
  try {
    const item: IItem = req.body;

    const newItem: IItem = await ItemService.addNewItem(item);
    console.log('newItem', newItem);

    res.status(201).send(newItem);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// PUT items/
itemsRouter.put('/:id', async (req: Request, res: Response) => {
  // try {
  //   const item: Item = req.body.item;

  //   await ItemService.update(item);

  //   res.status(200);
  // } catch (error) {
  //   res.status(500).send(error.message);
  // }
});

// DELETE items/:id
itemsRouter.delete('/:id', async (req: Request, res: Response) => {
  // try {
  //   const id: number = parseInt(req.params.id, 10);

  //   await ItemService.remove(id);

  //   res.status(200);
  // } catch (error) {
  //   res.status(500).send(error.message);
  // }
});
