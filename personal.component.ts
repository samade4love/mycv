import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  myimage3:string = "assets/images/image6.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
