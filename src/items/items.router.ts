/**
 * Required External Modules and Interfaces
 */

import express, {Request, Response} from 'express';
import * as ItemService from './items.service';
import {Item} from './item.interface';
import {Items} from './items.interface';

/**
 * Router Definition
 */

export const itemsRouter = express.Router();

/**
 * Controller Definitions
 */

// GET items/
itemsRouter.get('/', async (req: Request, res: Response) => {
  try {
    const items: Items = await ItemService.findAll();

    res.status(200).send(items);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// GET items/:id

itemsRouter.get('/:id', async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);
  try {
    const item: Item = await ItemService.find(id);

    res.status(200).send(item);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// POST items/

itemsRouter.post('/', async (req: Request, res: Response) => {
  try {
    const item: Item = req.body.item;

    await ItemService.create(item);

    res.status(201);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// PUT items/

itemsRouter.put('/:id', async (req: Request, res: Response) => {
  try {
    const item: Item = req.body.item;

    await ItemService.update(item);

    res.status(200);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// DELETE items/:id

itemsRouter.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);

    await ItemService.remove(id);

    res.status(200);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
