import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos:Todo[] = [
    {
      title:"Pretty little ditty @1pm",
    },
    {
      title:"Music is my aeroplane @9pm"
    },
    {
      title:"Sir Psycho Sexy @2am"
    }
  ]

  deleteTodo(todo:Todo){
    this.todos = this.todos.filter(t => t !== todo);
  }

  onSubmit(form){
    console.log(form.value);
    let data = form.value;
    this.todos.push({title:data.newtodo})
    form.reset();
  }

  constructor() { 

  }

  ngOnInit() {
  }

}
