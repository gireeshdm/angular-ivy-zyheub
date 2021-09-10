import { Component, OnInit } from '@angular/core';
import { Measure } from '../../measure';
import { StitchMeasureService } from '../../stitch-measure.service';

@Component({
  selector: 'app-stitch-post',
  templateUrl: './stitch-post.component.html',
  styleUrls: ['./stitch-post.component.css']
})
export class StitchPostComponent implements OnInit {
  measure: Measure = new Measure(1, '', '', '', '', '', '', '');
  message: any;
  constructor(private service: StitchMeasureService) {}
  ngOnInit() {}

  public registerNow() {
    let resp = this.service.doRegistration(this.measure);
    resp.subscribe(data => (this.message = data));
  }
}
