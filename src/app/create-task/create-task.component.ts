import { TaskService } from '../task.service';
import { Task } from '../task';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})


export class CreateTaskComponent implements OnInit {

 
  task: Task = new Task();
  submitted = false;

  constructor(private taskService: TaskService,
    private router: Router) { }
  
  ngOnInit() {
  }

  newTask(): void {
    this.submitted = false;
    this.task = new Task();
  }
  save() {
    this.taskService.createTask(this.task)
      .subscribe(data => console.log(data), error => console.log(error));
    this.task = new Task();
    this.gotoList();
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
  gotoList() {
    this.router.navigate(['add']); 
    }
}
