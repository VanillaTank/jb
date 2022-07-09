import { Observable } from "rxjs";
import { Category } from "src/app/model/Category";
import { CommonDAO } from "./CommonDAO";

export interface CategoryDAO extends CommonDAO<Category> {
    search(category: string): Observable<Category[]>
}