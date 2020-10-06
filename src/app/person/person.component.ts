import { Component, OnInit } from '@angular/core';
import {Person} from './Person';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor() { }

  people:Person[]=[];

  name:string="Ulvi";
  numbers:number[]=[10,20,3,4,5];
  ngOnInit(): void {
    this.people=[
      {name:"Ulvi",surname:"Mecidov",age:25},
      {name:"Orxan",surname:"Memmedli",age:30},
      {name:"Hesen",surname:"Hesenli",age:26},
    ]
  }

}
