import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StitchPostComponent } from '../stitch-post/stitch-post.component';

const routes: Routes = [
  {
    path: 'stitchRegister',
    component: StitchPostComponent
  },
  {
    path: '',
    redirectTo: 'stitchRegister',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
