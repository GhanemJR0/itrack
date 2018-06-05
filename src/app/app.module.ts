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

import { DataService } from './services/data.service';
import { AuthGuard } from './guards/auth.guard';
import { EditProfileComponent } from './components/user/edit-profile/edit-profile.component';

import { FlashMessagesModule } from 'angular2-flash-messages';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'user/profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'user/edit-profile/:id', component: EditProfileComponent, canActivate: [AuthGuard]},
  {path: 'user/signup', component: SignupComponent},
  {path: 'user/login', component: LoginComponent},
  {path: 'user/track-dashboard', component: TrackDashboardComponent, canActivate: [AuthGuard]},
  {path: 'add-track', component: AddTrackComponent, canActivate: [AuthGuard]},
  {path: 'track-profile', component: TrackProfileComponent, canActivate: [AuthGuard]},
  {path: 'track-profile/add-suggested-links', component: AddSuggestedLinksComponent, canActivate: [AuthGuard]},
  {path: 'user/track-dashboard/suggested-links', component: SuggestedLinksComponent, canActivate: [AuthGuard]},
  {path: 'user/track-dashboard/track-syllabus', component: TrackSyllabusComponent, canActivate: [AuthGuard]},
  {path: 'user/track-dashboard/track-information', component: TrackInformationComponent, canActivate: [AuthGuard]},
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
    NotFoundComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  providers: [
    DataService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
