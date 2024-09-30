import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from '../models/Restaurant';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit  {

@Input()
items?:Restaurant;

constructor(private foodservice:FoodService){}
  ngOnInit(): void {
   
  }

}
