import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-supplier-chart-current-capacity-small',
  templateUrl: './supplier-chart-current-capacity-small.component.html',
  styleUrls: ['./supplier-chart-current-capacity-small.component.scss']
})
export class SupplierChartCurrentCapacitySmallComponent {
  @Input() chartData?: any;
  @Input() text?: string;
}
