import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, Validators, FormBuilder } from '@angular/forms';
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
import { TrackInformationComponent } from './components/user/track-dashboard/track-information/track-information.component';
import { SuggestedLinksComponent } from './components/user/track-dashboard/suggested-links/suggested-links.component';
import { TrackSyllabusComponent } from './components/user/track-dashboard/track-syllabus/track-syllabus.component';
import { AddSuggestedLinksComponent } from './components/add-suggested-links/add-suggested-links.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'user/profile', component: ProfileComponent},
  {path: 'user/signup', component: SignupComponent},
  {path: 'user/login', component: LoginComponent},
  {path: 'user/track-dashboard', component: TrackDashboardComponent},
  {path: 'add-track', component: AddTrackComponent},
  {path: 'track-profile', component: TrackProfileComponent},
  {path: 'track-profile/add-suggested-links', component: AddSuggestedLinksComponent},
  {path: 'user/track-dashboard/suggested-links', component: SuggestedLinksComponent},
  {path: 'user/track-dashboard/track-syllabus', component: TrackSyllabusComponent},
  {path: 'user/track-dashboard/track-information', component: TrackInformationComponent},
  {path: '**', component: NotFoundComponent}
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
    TrackDashboardComponent,
    TrackInformationComponent,
    SuggestedLinksComponent,
    TrackSyllabusComponent,
    AddSuggestedLinksComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
