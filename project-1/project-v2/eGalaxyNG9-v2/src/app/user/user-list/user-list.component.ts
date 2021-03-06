import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Observable<User[]>;

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.users = this.userService.getUsersList();
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  getUser(id: number) {
    this.router.navigate(['/eGalaxy/users/details', id]);
  }

  updateUser(id: number) {
    this.router.navigate(['/eGalaxy/users/update', id]);
  }

  register() {
    this.router.navigate(['/eGalaxy/users/register']);
  }

}
