import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {ProductListComponent} from './products/product-list.component';
import {ConvertToSpacesPipe} from './shared/convert-to-spaces.pipe';
// import { FilterStringPipe } from './shared/filter-string.pipe';
import {StarComponent} from './shared/star.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    // FilterStringPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }