import { Observable, of } from "rxjs";
import { Category } from "src/app/model/Category";
import { Priority } from "src/app/model/Priority";
import { Task } from "src/app/model/Task";
import { TaskDAO } from "../interfaces/TaskDAO";
import { TestData } from '../../TestData'

export class TaskDAOArray implements TaskDAO {
  search(category: Category | null,
         searchText: string | null,
         status: boolean | null,
         priority: Priority | null): Observable<Task[]> {
    if (category != null) {
      return of(TestData.tasks.filter(t => t.category === category));
    }
    return of(TestData.tasks);
  }

  getCompletedCountInCategory(category: Category): Observable<number> {
    throw new Error("Method not implemented.");
  }

  getUncompletedCountInCategory(category: Category): Observable<number> {
    throw new Error("Method not implemented.");
  }

  getTotalCountInCategory(category: Category): Observable<number> {
    throw new Error("Method not implemented.");
  }

  getTotalCount(): Observable<number> {
    throw new Error("Method not implemented.");
  }

  add(t: Task): Observable<Task> {
    throw new Error("Method not implemented.");
  }

  get(id: number): Observable<Task> {
    throw new Error("Method not implemented.");
  }

  delete(id: number): Observable<Task> {
    throw new Error("Method not implemented.");
  }

  update(t: Task): Observable<Task> {
    throw new Error("Method not implemented.");
  }

  getAll(): Observable<Task[]> {
    return of(TestData.tasks)
  }

}
