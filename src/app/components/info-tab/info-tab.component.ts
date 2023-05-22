import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RrboService } from 'src/app/services/rrbo/rrbo.service';
import { SyntheticBasestocksService } from 'src/app/services/synthetic-basestocks/synthetic-basestocks.service';

@Component({
  selector: 'app-info-tab',
  templateUrl: './info-tab.component.html',
  styleUrls: ['./info-tab.component.scss'],
})
export class InfoTabComponent implements OnInit {
  @Input() type: string | undefined;
  @Input() title: string | undefined;
  @Input() enableSearch: boolean | undefined;
  @Input() infoData: any[] | undefined;

  constructor(
    private router: Router,
    private synteticService: SyntheticBasestocksService,
    private rrboService: RrboService
  ) {}

  ngOnInit(): void {}

  onClickA(item: any) {
    this.router.navigate([item.path]);
    if (item.name === 'Synthetic Basestock Model' ) {
      this.synteticService.setSelectedMainTab(item.selectedTab);
    } else if (item.name === 'PAO Demand Model') {
      this.synteticService.setSelectedPaoMainTab(item.selectedTab);
    } else if (item.name === 'RRBO Material Balance') {
      this.rrboService.setSelectedRrboTab(item.selectedTab);
    } else if (item.name === 'RRBO Capacity Map') {
      this.rrboService.setSelectedRrboTab(item.selectedTab);
    }
  }
}
