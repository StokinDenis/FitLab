import {Injectable} from "@angular/core";
import {BehaviorSubject, map, Observable} from "rxjs";


@Injectable({providedIn: "root"})
export class userStore{
  private readonly isAuth$: BehaviorSubject<boolean> = new BehaviorSubject(false  );

  public selectIsAuth(): Observable<boolean> {
    return this.isAuth$.asObservable();
  }
}
