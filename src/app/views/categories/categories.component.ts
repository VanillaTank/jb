import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/model/Category';
import { DataHandlerService } from 'src/app/services/data-handler.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  // @ts-ignore
  //categories: Category[];
  // @ts-ignore
  selectedCategory: Category;

  constructor(private dataHandler: DataHandlerService) {
  }

  // @ts-ignore
  @Input() categories: Category[];
  // @ts-ignore
  @Output() selectCategory = new EventEmitter<Category>();
  // @ts-ignore
  selectedCategory: Category;

  ngOnInit(): void {
    // this.dataHandler.getAllCategories().subscribe(c => this.categories = c);
  }

  showTasksByCategory(category: Category) {
    // this.dataHandler.fillTasksbyCategory(category);
    //this.selectedCategory = category;
    if(this.selectedCategory === category) {
      return;
    }
    this.selectedCategory = category;
    this.selectCategory.emit(this.selectedCategory)

  }

}
