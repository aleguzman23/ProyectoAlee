import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LogInComponent } from './views/log-in/log-in.component';
import { GetPokemonService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    DashboardComponent,
    LogInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GetPokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
