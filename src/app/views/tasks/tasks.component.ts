import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DataHandlerService } from "../../services/data-handler.service";
import { Task } from 'src/app/model/Task';
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort'
import { EditTaskDialogComponent } from "../../edit-task-dialog/edit-task-dialog.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})


export class TasksComponent implements OnInit {

  displayedColumns: string[] = ['color', 'id', 'title', 'date', 'priority', 'category'];
  dataSource: MatTableDataSource<Task>;

  @ViewChild(MatPaginator, {static: false}) private paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) private sort: MatSort;


  tasks: Task[];

  @Input('tasks')
  set setTasks(tasks: Task[]) {
    this.tasks = tasks;
    this.fillTable();
  }

  @Output() updateTask = new EventEmitter<Task>();

  constructor(private dataHandler: DataHandlerService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    // this.dataHandler.getAllTasks().subscribe((tasks: Task[]) => {
    //   this.tasks = tasks;
    //   this.dataSource.data = this.tasks;
    // });
    this.fillTable();
  }

  openEditTaskDialog(task: Task):void {
    const dialogRef = this.dialog.open(EditTaskDialogComponent,
      {
        data: [task, 'Редактирование задачи'],
        autoFocus: false
      });
    dialogRef.afterClosed().subscribe(result => console.log(result))
  }

  toggleTaskCompleted(task: Task): void {
    task.completed = !task.completed;
  }


  getPriorityColor(task: Task): string {
    if (task.completed) {
      return '#F8F9FA'
    }
    if (task.priority && task.priority.color) {
      return task.priority.color
    }
    return '#fff';
  }

  private fillTable(): void {
    if (!this.dataSource) {
      return
    }
    this.dataSource.data = this.tasks;
    this.addTableObjects();

    // @ts-ignore
    // объясняет, как соритировать
    this.dataSource.sortingDataAccessor = (task, colName) => {
      switch (colName) {
        case 'priority':
          return task.priority ? task.priority.id : null;
        case 'category':
          return task.category ? task.category.title : null;
        case 'date':
          return task.date ? task.date : null;
        case 'title':
          return task.title
      }
    }
  }

  private addTableObjects(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
