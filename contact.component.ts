import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  myimage4:string = "assets/images/image5.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
