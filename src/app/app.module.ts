import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './app.Login';

@NgModule({
    imports: [
        BrowserModule,FormsModule
        
    ],
    declarations: [
        AppComponent,LoginComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }