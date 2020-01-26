import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from './components/header/header.component';
import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { HomeComponent } from './components/home/home.component';
import { TodoComponent } from './components/todo/todo.component';


// 
@NgModule({
  declarations: [AppComponent, HeaderComponent, NavLinkComponent, HomeComponent, TodoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:"home",
        component:HomeComponent
      },
      {
        path:"todo",
        component:TodoComponent
      },
      {
        path:"**",
        component:HomeComponent
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
