import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import { User } from './../user/user';

@Component({
    moduleId: module.id,
    selector: 'headernav',
    templateUrl: './headernav.component.html'
})
export class HeaderNavComponent {

    user;
    private _localStorageService: LocalStorageService;
    private _router: Router;

    constructor(localStorageService: LocalStorageService, router: Router) {
        this._localStorageService = localStorageService;
        this._router = router;
        this.user = this._localStorageService.get('user');
    }

    logout(): void {
        this._localStorageService.remove('user');
        this._router.navigate(['login']);
    }
    
}
