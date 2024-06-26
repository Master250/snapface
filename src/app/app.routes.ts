import { RouterModule, Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapsComponent } from './single-face-snaps/single-face-snaps.component';
import { NewFaceSnapComponent } from './new-face-snap/new-face-snap.component';
//import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: 'facesnaps',
    component: FaceSnapListComponent,
  },
  {
    path: "",
    component: LandingPageComponent
  },
  {
    path:"facesnaps/:id",
    component:SingleFaceSnapsComponent
  },
  {
    path:"create",
    component: NewFaceSnapComponent
  }
];

// @NgModule({
//     imports:[

//     ],
//     exports:[
//         RouterModule
//     ]
// })
