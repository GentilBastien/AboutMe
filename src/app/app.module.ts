import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [HomeComponent, LayoutComponent],
  imports: [RouterOutlet, BrowserModule],
})
export class AppModule {}
