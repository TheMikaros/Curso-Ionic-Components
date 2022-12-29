import { Component, OnInit } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';
import { RangeValue } from '@ionic/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  range: RangeValue = 0.05;
  porcentaje: number = 0.05;



  constructor() { }

  ngOnInit() {
  }

  rangeChange(ev: Event) {
    this.range = (ev as RangeCustomEvent).detail.value;
    this.porcentaje = (this.range as number) / 100;
  }
}
