import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  title = "todo-app";
  todoArray = [];
  addTodo(value) {
    this.todoArray.push(value);
    console.log(this.todoArray);
  }
  deleteItem(todo) {
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        this.todoArray.splice(i, 1);
      }
    }
  }
  todoSubmit(value: any) {
    if (value !== "") {
      this.todoArray.push(value.todo);
    } else {
      alert("Field required **");
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
