import mongoose from 'mongoose';
export interface UserInterface {
  _id?: mongoose.Types.ObjectId;
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  password?:string;
  joindate: Date;
  status?: boolean;
  description?: string;
  photourl?: string;
  jobdesk?: string;
}

export type UserProperties = keyof UserInterface;