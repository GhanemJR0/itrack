import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home/home.component';
import { TracksheaderComponent } from './components/home/tracksheader/tracksheader.component';
import { PopulartracksComponent } from './components/home/populartracks/populartracks.component';
import { CreatetrackComponent } from './components/home/createtrack/createtrack.component';
import { CommunityComponent } from './components/home/community/community.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { LoginComponent } from './components/user/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { AddTrackComponent } from './components/add-track/add-track.component';
import { TrackProfileComponent } from './components/track-profile/track-profile.component';
import { TrackDashboardComponent } from './components/user/track-dashboard/track-dashboard.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'user/profile', component: ProfileComponent},
  {path: 'user/signup', component: SignupComponent},
  {path: 'user/login', component: LoginComponent},
  {path: 'user/track-dashboard', component: TrackDashboardComponent},
  {path: 'add-track', component: AddTrackComponent},
  {path: 'track-profile', component: TrackProfileComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TracksheaderComponent,
    PopulartracksComponent,
    CreatetrackComponent,
    CommunityComponent,
    FooterComponent,
    ProfileComponent,
    LoginComponent,
    SearchComponent,
    SignupComponent,
    AddTrackComponent,
    TrackProfileComponent,
    TrackDashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
