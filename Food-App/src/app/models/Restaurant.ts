import { Address } from "./Address";
import { Dish } from "./Dish";

export type Restaurant={
    restaurantId?:number;
     restaurantName?:String;
    location?:String;
     cuisine?:String;
     rating?:number;
     address?:Address;
     dishList?:Dish[];
}