import mongoose, {Schema} from 'mongoose';
import {IItem} from '../interfaces/IItem';

const ItemSchema: Schema = new Schema({
  name: {type: String, required: true, unique: false},
  price: {type: Number, required: true, unique: false},
  description: {type: String, required: false, unique: false},
  image: {type: String, required: false, unique: false},
});

export default mongoose.model<IItem>('Item', ItemSchema);
