import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { ITask, TODO_TASKS } from './task';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, TodoTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular_TaskWebsite_ITStep';

  tasks: ITask[] = TODO_TASKS;
}
