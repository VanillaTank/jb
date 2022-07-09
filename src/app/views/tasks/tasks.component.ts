import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DataHandlerService } from "../../services/data-handler.service";
import { Task } from 'src/app/model/Task';
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})


export class TasksComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['color', 'id', 'title', 'date', 'priority', 'category'];
  // @ts-ignore
  dataSource: MatTableDataSource<Task>;

  // @ts-ignore
  tasks: Task[];

  // @ts-ignore
  @ViewChild(MatPaginator, { static: false }) private paginator: MatPaginator;

  // @ts-ignore
  @ViewChild(MatSort, { static: false }) private sort: MatSort;


  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit() {
    this.dataHandler.taskSubject.subscribe((tasks: Task[]) => this.tasks = tasks);

    this.dataSource = new MatTableDataSource();
    this.refreshTable();
  }

  ngAfterViewInit(): void {
    this.addTableObjects();
  }


  toggleTaskCompleted(task: Task): void {
    task.completed = !task.completed;
  }


  getPriorityColor(task: Task): string {
    if (task.completed) { return '#F8F9FA' }
    if (task.priority && task.priority.color) { return task.priority.color }
    return '#fff';
  }

  private refreshTable(): void {
    this.dataSource.data = this.tasks;
    this.addTableObjects();

    // @ts-ignore
    // объясняет, как соритировать
    this.dataSource.sortingDataAccessor = (task, colName) => {
      switch (colName) {
        case 'priority': return task.priority ? task.priority.id : null;
        case 'category': return task.category ? task.category.title : null;
        case 'date': return task.date ? task.date : null;
        case 'title': return task.title
      }
    }
  }

  private addTableObjects(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}