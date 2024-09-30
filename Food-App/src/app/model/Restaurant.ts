import { Address } from "./Address";
import { Dish } from "./Dish";

export type Restaurants={
  restaurantImage: string;
    restaurantId?:number;
     restaurantName?:string;
    location?:string;
     cuisine?:string;
     rating?:number;
     address?:Address;
     dishList?:Dish[];
}