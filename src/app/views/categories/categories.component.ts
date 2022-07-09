import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/Category';
import { DataHandlerService } from 'src/app/services/data-handler.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  // @ts-ignore
  categories: Category[];
  // @ts-ignore
  selectedCategory: Category;
  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit(): void {
    this.dataHandler.categoriesSubject.subscribe(c => this.categories = c);
  }

  showTasksByCategory(category: Category) {
    this.dataHandler.fillTasksbyCategory(category);
    this.selectedCategory = category;
  }

}
