import mongoose from 'mongoose';

export interface RoomInterface {
  _id?: mongoose.Types.ObjectId;  
  name: string;                 
  bedtype: string;                 
  code: string;                   
  facilities?: string[];          
  rate: number;                   
  offer: number;                   
  status: 'available' | 'booked' | 'maintenance' | 'unavailable'; 
}

export type RoomProperties = keyof RoomInterface; 
