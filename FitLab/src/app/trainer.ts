import {Person} from "./person";

export interface Trainer extends Person{
  expertise: string,
  skills:string[],
  avatar?:string;
}
