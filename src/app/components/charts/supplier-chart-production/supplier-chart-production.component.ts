import { Component, Input, OnInit } from '@angular/core';
import { LandingServiceService } from 'src/app/services/landing-service.service';

@Component({
  selector: 'app-supplier-chart-production',
  templateUrl: './supplier-chart-production.component.html',
  styleUrls: ['./supplier-chart-production.component.scss'],
})
export class SupplierChartProductionComponent implements OnInit {
  @Input() chartData?: any;

  public customPalette: string[] = [];

  constructor(private mainService: LandingServiceService) {}

  ngOnInit(): void {
    this.customPalette = this.mainService.customPalette;
  }

  customizeTooltip(arg: any) {
    return {
      text: `${arg.valueText}&#176C`,
    };
  }

  customizeText(arg: any) {
    return `${arg.valueText}&#176C`;
  }
}
