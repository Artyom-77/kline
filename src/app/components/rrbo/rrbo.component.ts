import { Component, OnInit } from '@angular/core';
import { RrboService } from 'src/app/services/rrbo/rrbo.service';

@Component({
  selector: 'app-rrbo',
  templateUrl: './rrbo.component.html',
  styleUrls: ['./rrbo.component.scss'],
})
export class RrboComponent implements OnInit {
  public selectedTab: number = 1;
  public breadcrumpData: any[] = [{
    home: 'Sustainability focused Basestocks',
    main: 'RRBO',
    tab: 'Regulations'
  }]
  constructor(private service: RrboService) {}

  ngOnInit(): void {}

  setSelectedRrboTab(selectedTab: number): void {
    this.service.setSelectedRrboTab(selectedTab);
    if(selectedTab === 1 ) {
      this.breadcrumpData[0].tab = 'Regulations'
    } else if (selectedTab === 2) {
      this.breadcrumpData[0].tab = 'Capacity Map'
    } else if (selectedTab === 3) {
      this.breadcrumpData[0].tab = 'Material Balance'
    }
  }

  getSelectedRrboTab(): any {
    return this.service.getSelectedRrboTab();
  }
}
