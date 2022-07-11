import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TestData } from '../data/TestData';
import { Category } from '../model/Category';
import { Task } from '../model/Task';
import { TaskDAOArray } from "../data/dao/impl/TaskDAOArray";
import { CategoryDAOArray } from "../data/dao/impl/CategoryDAOArray";
import { Priority } from "../model/Priority";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  // taskSubject = new BehaviorSubject<Task[]>(TestData.tasks);
  // categoriesSubject = new BehaviorSubject<Category[]>(TestData.categories)

  taskDaoArray = new TaskDAOArray();
  categoryDaoArray = new CategoryDAOArray();

  constructor() {
  }

  // fillTasks():void {
  //   this.taskSubject.next(TestData.tasks);
  // }
  //
  // fillTasksbyCategory(category: Category):void {
  //   const tasks = TestData.tasks.filter( task => task.category === category );
  //   this.taskSubject.next(tasks);
  // }

  getAllTasks(): Observable<Task[]> {
    return this.taskDaoArray.getAll();
  }

  getAllCategories(): Observable<Category[]> {
    return this.categoryDaoArray.getAll();
  }

  searchTasks(category: Category|null,
              searchText: string|null,
              status: boolean|null,
              priority: Priority|null): Observable<Task[]> {
    return this.taskDaoArray.search(category, searchText, status, priority)
  }



}
