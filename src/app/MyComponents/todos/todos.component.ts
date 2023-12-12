import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from '../../Todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, RouterOutlet,TodoItemComponent,AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
 localNotes: string| null;
 todos:Todo[];
 constructor(){
  this.localNotes = localStorage.getItem("todos");
  if(this.localNotes == null ){
    this.todos = [];
  }else{
    this.todos = JSON.parse(this.localNotes)
  }


 }
 deleteNote(todo:Todo){
  console.log(todo);
  const index = this.todos.indexOf(todo);
  this.todos.splice(index,1);
  localStorage.setItem("todos",JSON.stringify(this.todos));
  }
 addNote(todo:Todo){
  console.log(todo);
  const index = this.todos.indexOf(todo);
  this.todos.push(todo)
  localStorage.setItem("todos",JSON.stringify(this.todos));

 }
}
