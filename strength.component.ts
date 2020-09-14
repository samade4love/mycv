import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strength',
  templateUrl: './strength.component.html',
  styleUrls: ['./strength.component.css']
})
export class StrengthComponent implements OnInit {

  myimage6:string = "assets/images/03.jpg";
  myimage7:string = "assets/images/01.jpg";
  myimage8:string = "assets/images/04.jpg";
  myimage9:string = "assets/images/02.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
