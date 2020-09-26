import mongoose, {Document} from 'mongoose';

export interface IItem extends Document {
  _id: mongoose.Types.ObjectId,
  name: String;
  price: Number;
  description: String;
  image: String;
}
