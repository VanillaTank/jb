import { Observable } from "rxjs";
import { Priority } from "src/app/model/Priority";
import { PriorityDAO } from "../interfaces/PriorityDAO";

export class PriorityDAOArray implements PriorityDAO {
    add(t: Priority): Observable<Priority> {
        throw new Error("Method not implemented.");
    }
    get(id: number): Observable<Priority> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Observable<Priority> {
        throw new Error("Method not implemented.");
    }
    update(t: Priority): Observable<Priority> {
        throw new Error("Method not implemented.");
    }
    getAll(): Observable<Priority[]> {
        throw new Error("Method not implemented.");
    }

}