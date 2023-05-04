import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-regulation-used-oil-tab',
  templateUrl: './regulation-used-oil-tab.component.html',
  styleUrls: ['./regulation-used-oil-tab.component.scss'],
})
export class RegulationUsedOilTabComponent {
  @Input() oilData: any[] = [];
}
