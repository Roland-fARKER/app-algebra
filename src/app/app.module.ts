import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//prime ng
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TimelineModule } from 'primeng/timeline';

import { StepsComponent } from './components/steps/steps.component';
import { HomeComponent } from './views/home/home.component';
import { EquationFormatPipe } from './pipes/equation-format.pipe';
import { OurstoryComponent } from './components/ourstory/ourstory.component';

@NgModule({
  declarations: [
    AppComponent,
    StepsComponent,
    HomeComponent,
    EquationFormatPipe,
    OurstoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    TimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
