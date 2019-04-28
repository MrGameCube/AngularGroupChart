import { Component, OnInit, Input } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';

@Component({
  selector: 'app-group-chart',
  templateUrl: './group-chart.component.html',
  styleUrls: ['./group-chart.component.scss']
})
export class GroupChartComponent implements OnInit {
  
  @Input("charts")
  public charts: GoogleChartInterface[];


  constructor() { }

  public displayedChart: GoogleChartInterface;
  title = 'chartTest';

  public onButtonClick(event):void {
    this.displayedChart = this.charts[event.value];
  }
  ngOnInit() {
    this.displayedChart = this.charts[0];
  }

}
