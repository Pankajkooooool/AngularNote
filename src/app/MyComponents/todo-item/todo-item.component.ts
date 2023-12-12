import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  constructor(){}
  @Input() todo!: Todo;
  @Output() noteDelete : EventEmitter<Todo> = new EventEmitter();

  onClickk(todo: Todo){
    this.noteDelete.emit(todo);
   //emiting an event from the child component of todo-item to the parent component todos, and from there handling changes
  }
}
