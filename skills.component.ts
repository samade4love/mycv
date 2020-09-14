import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  myimage5:string = "assets/images/image3.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
