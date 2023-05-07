import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-supplier-chart-sustainability-measures',
  templateUrl: './supplier-chart-sustainability-measures.component.html',
  styleUrls: ['./supplier-chart-sustainability-measures.component.scss'],
})
export class SupplierChartSustainabilityMeasuresComponent {
  @Input() chartData?: any;
  @Input() text?: string;

  customizeText(arg: any) {
    return `${arg.valueText} %`;
  }
}
