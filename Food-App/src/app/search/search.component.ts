import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  senote:string="";
options=["All","Chennai","Bengaluru","Hyderabad","Mumbai","Pune"];

@Output()
searchNote:EventEmitter<string>=new EventEmitter<string>()

selectedLocation: string = "";
@Output() 
locationSelected: EventEmitter<string> = new EventEmitter<string>();
constructor(){}
  ngOnInit(): void {
  
  }
  searchInput(){
    console.log(this.senote)
    this.searchNote.emit(this.senote);
    this.senote="";
  }
  filterRestaurants() {
    this.locationSelected.emit(this.selectedLocation);
  }
}
