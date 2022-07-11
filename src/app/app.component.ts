import { Component, OnInit } from '@angular/core';
import { Task } from "./model/Task";
import { DataHandlerService } from "./services/data-handler.service";
import { Category } from "./model/Category";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'Todo';
  //@ts-ignore
  tasks: Task[];
  //@ts-ignore
  categories: Category[];
  //@ts-ignore
  selectedCategory: Category|null;

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit() {
    this.dataHandler.getAllTasks().subscribe(t => this.tasks = t);
    this.dataHandler.getAllCategories().subscribe(c => this.categories = c);
    this.onSelectCategory(null);
  }

  onSelectCategory(category: Category | null) {
    this.selectedCategory = category;
    this.dataHandler.searchTasks(
      this.selectedCategory,
      null,
      null,
      null
    ).subscribe((t: Task[]) => {
      this.tasks = t;
    })
  }

  onUpdateTask(task:Task) {
    console.log(task);
  }
}
