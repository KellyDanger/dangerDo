import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['../app.component.css']
})
export class ListComponent implements OnInit {

  task: Task = {
    id: 1,
    title: 'Make a Duck',
    done: false
  }


  constructor() { }

  ngOnInit(): void {
  }

}
