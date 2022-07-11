import { Observable, of } from "rxjs";
import { Category } from "src/app/model/Category";
import { CategoryDAO } from "../interfaces/CategoryDAO";
import { TestData } from "../../TestData";

export class CategoryDAOArray implements CategoryDAO {
  search(category: string): Observable<Category[]> {
    throw new Error("Method not implemented.");
  }

  add(t: Category): Observable<Category> {
    throw new Error("Method not implemented.");
  }

  get(id: number): Observable<Category> {
    throw new Error("Method not implemented.");
  }

  delete(id: number): Observable<Category> {
    throw new Error("Method not implemented.");
  }

  update(t: Category): Observable<Category> {
    throw new Error("Method not implemented.");
  }

  getAll(): Observable<Category[]> {
    return of(TestData.categories)
  }

}
