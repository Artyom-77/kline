import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private synteticService: SyntheticBasestocksService
  ) {}

  ngOnInit(): void {
    console.log('infoData', this.infoData);
  }
  onClickA(item: any) {
    // this.router.navigate(['synthetic-basestocks'], {queryParams:{ selectedMainTab: 2}});
    this.router.navigate([item.path]);
    if (item.id === 1 || item.id === 2) {
      this.synteticService.setSelectedMainTab(item.selectedTab);
    }
  }
}
