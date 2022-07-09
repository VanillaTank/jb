import { CommonDAO } from "./CommonDAO";
import {Task} from '../../../model/Task';
import { Observable } from "rxjs";
import { Category } from "src/app/model/Category";
import { Priority } from "src/app/model/Priority";

export interface TaskDAO extends CommonDAO<Task> {
 search(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]>;
 getCompletedCountInCategory(category: Category): Observable<number>;
 getUncompletedCountInCategory(category: Category): Observable<number>;
 getTotalCountInCategory(category: Category): Observable<number>;
 getTotalCount(): Observable<number>;
}