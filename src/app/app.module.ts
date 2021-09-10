import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StitchPostComponent } from './stitch-post/stitch-post.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StitchMeasureService } from '../stitch-measure.service';

@NgModule({
  declarations: [AppComponent, StitchPostComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [StitchMeasureService],
  bootstrap: [AppComponent]
})
export class AppModule {}
