import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from "./app.router";
import { FormsModule } from "@angular/forms";

// import { ContactsService } from "./services/contacts.service";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { SearchPipe } from "./app.search";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule, 
    routing,
    HttpModule, 
    FormsModule
  ],
  providers: [
    // ContactsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
