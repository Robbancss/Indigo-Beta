import express, {Request, Response} from 'express';
import {IItem} from '../interfaces/IItem';
import ItemService from '../services/item';

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
  // const id: number = parseInt(req.params.id, 10);
  // try {
  //   const item: IItem = await ItemService.find(id);

  //   res.status(200).send(item);
  // } catch (error) {
  //   res.status(404).send(error.message);
  // }
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
