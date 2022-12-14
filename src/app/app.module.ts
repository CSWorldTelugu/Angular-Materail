import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


const routes: Routes = [

  {
    path: "", redirectTo: "/home", pathMatch: "full"

  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "profile", component: ProfileComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'contact-us', component: ContactUsComponent
  }


]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProfileComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule


  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
