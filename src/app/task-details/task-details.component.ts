import { Task } from '../task';
import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../task.service';
import { TaskListComponent } from '../task-list/task-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  idTask: number;
  task: Task;

  constructor(private http: HttpClient,private route: ActivatedRoute,private router: Router,
    private taskService: TaskService) { }

  ngOnInit() {
    this.task = new Task();

    this.idTask = this.route.snapshot.params['idTask'];

    this.taskService.getTask(this.idTask)
    .subscribe(data => {
      console.log(data.Task)
      this.task = data.Task;
    }, error => console.log(error));
}

list(){
  this.router.navigate(['']);
}


Pending(id: number) {
  this.taskService.Pending(id)
    .subscribe(
      data => {
        console.log(data);
        this.router.navigate(['']);
      },
      error => console.log(error));
}

InProgress(id: number) {
  this.taskService.InProgress(id)
    .subscribe(
      data => {
        console.log(data);
        this.router.navigate(['']); 
      },
      error => console.log(error));
}
Done(id: number) {
  this.taskService.Done(id)
    .subscribe(
      data => {
        console.log(data);
        this.router.navigate(['']);  
      },
      error => console.log(error));
}

}
