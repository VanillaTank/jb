import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from 'src/app/services/data-handler.service';
import { Task } from 'src/app/model/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

//@ts-ignore
tasks: Task[];

  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit(): void {
    this.tasks = this.dataHandler.getTasks();
  }

}
