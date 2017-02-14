import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './../user/user';
import { UserService } from './../app.service';

@Component({
    moduleId: module.id,
    selector: 'users',
    templateUrl: './users.component.html'
})
export class UsersComponent {

    deleted: boolean = true;
    users: User[] = [];
    private _router: Router;
    private _service: UserService;

    constructor(router: Router, service: UserService) {
        this._router = router;
        this._service = service;
        this.getUsers();
    }

    getUsers(): void {
        this.deleted = !this.deleted;
        this._service.getUsers(this.deleted).subscribe( users => this.users = users, error => console.log(error));
    }

    selectedUser(user: User): void {
        if (!user.deleted_at) this._router.navigate([ '/user', user.id ]);
    }

}
