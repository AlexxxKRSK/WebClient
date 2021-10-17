import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "./user/user.service";
import {Observable} from "rxjs";
import {User} from "./entities/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebClient';
  users$: Observable<User[]>;

  constructor(private router: Router,
              private service: UserService) {
    this.users$ = this.service.findAll();
  }

  public navigateToUsers(): void {
    this.router.navigate(['./user']);
  }

  navigateToMain() {
    this.router.navigate([""]);
  }
}
