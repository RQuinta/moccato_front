import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { HeaderNavComponent } from './headernav/headernav.component';
import { routing } from './app.routes';
import { UserService } from './app.service';
import { SessionsService } from './services/sessions.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalStorageModule } from 'angular-2-local-storage';
import 'rxjs/add/operator/map';

@NgModule({
    imports: [ BrowserModule, HttpModule, routing, FormsModule, ReactiveFormsModule, LocalStorageModule.withConfig({ prefix: 'my-app', storageType: 'localStorage' }) ],
    declarations: [ AppComponent, LoginComponent, UserComponent, UsersComponent, HeaderNavComponent ],
    bootstrap: [ AppComponent ],
    providers: [ SessionsService, UserService ]
})
export class AppModule {
    
}