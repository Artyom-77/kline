import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-regulation-summary-tab',
  templateUrl: './regulation-summary-tab.component.html',
  styleUrls: ['./regulation-summary-tab.component.scss'],
})
export class RegulationSummaryTabComponent {
  @Input() tableData: any[] = [];
}
