import { Component, Input, OnInit } from '@angular/core';
import { LandingServiceService } from 'src/app/services/landing-service.service';

@Component({
  selector: 'app-supplier-chart-sustainability-measures',
  templateUrl: './supplier-chart-sustainability-measures.component.html',
  styleUrls: ['./supplier-chart-sustainability-measures.component.scss'],
})
export class SupplierChartSustainabilityMeasuresComponent implements OnInit {
  @Input() chartData?: any;
  @Input() text?: string;
  public dataValues: any[] = [];
  public customPalette: string[] = [];

  constructor(private mainService: LandingServiceService) {}

  ngOnInit(): void {
    this.customPalette = this.mainService.customPalette;
    this.chartData.map((item: any) => {
      this.dataValues.push(item.value);
    });
  }
  customizeText(arg: any) {
    return `${arg.valueText} %`;
  }

  getText(item: any, text: any) {
    return `Parameter ${item.index + 1}`;
  }

  customizeTooltip = (arg: any) => ({
    text: this.getText(arg, arg.valueText),
  });

  customizeText1 = (arg: any) => this.getText(arg.item, arg.text);
}
