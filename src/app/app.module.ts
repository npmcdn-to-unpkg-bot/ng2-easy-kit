import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppComponent }  from './app.component';
import { AppService }  from './app.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
      AppService
  ],
  declarations: [
    AppComponent
  ],
  exports: [
      AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

