import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ProjectComponent } from './components/projects-page/project/project.component';
import { PackageComponent } from './components/projects-page/package/package.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProjectsPageComponent,
    NavigationComponent,
    ProjectComponent,
    PackageComponent,
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
