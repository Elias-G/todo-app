import { Component, OnInit } from '@angular/core';
//import { workers } from 'cluster';

@Component({
  selector: 'app-header', // <app-header> </app-header>
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})

//<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmMD4TjNNTl_MWb7x5xa8kKodZAgieq6CcAQtC9I4X9LXewMm_BA&s">
export class HeaderComponent implements OnInit {

  links = ["Home","Elias Groth","Projects","Contact"]

  constructor() { }

  ngOnInit() {
  }

}
