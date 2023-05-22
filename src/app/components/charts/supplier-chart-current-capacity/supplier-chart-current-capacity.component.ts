import { Component, Input, OnInit } from '@angular/core';
import { LandingServiceService } from 'src/app/services/landing-service.service';

@Component({
  selector: 'app-supplier-chart-current-capacity',
  templateUrl: './supplier-chart-current-capacity.component.html',
  styleUrls: ['./supplier-chart-current-capacity.component.scss'],
})
export class SupplierChartCurrentCapacityComponent implements OnInit {
  @Input() chartData?: any;
  @Input() text?: string;
  public customPalette: string[] = [];

  constructor(private mainService: LandingServiceService) {}

  ngOnInit(): void {
    this.customPalette = this.mainService.customPalette;
  }
}
