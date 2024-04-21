import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule, AppRoutingModule],
})
export class AppModule {}
