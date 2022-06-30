import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialExampleModule} from '../material.module';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule, } from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatNativeDateModule} from '@angular/material/core';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    BrowserModule,  BrowserAnimationsModule,
    MatButtonModule, MatTabsModule,  MatCardModule,        
    MatNativeDateModule,  MaterialExampleModule, 
    MatBadgeModule,  MatIconModule,  
    FormsModule, ReactiveFormsModule, 
    HttpClientModule, 
    ],
  declarations: [ AppComponent, HelloComponent, 
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }