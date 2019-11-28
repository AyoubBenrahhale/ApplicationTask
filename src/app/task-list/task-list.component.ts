import { TaskDetailsComponent } from '../task-details/task-details.component';
import { Observable } from "rxjs";
import { TaskService } from "../task.service";
import { Task } from "../task";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {

  tasks: Observable<Task[]>;

  constructor(private taskService: TaskService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.tasks = this.taskService.getTasksList();
  }
  deleteTask(id: number) {
    this.taskService.deleteTask(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  taskDetails(idTask: number){
    this.router.navigate(['details', idTask]);
  }

  
  
  
}