import { Component, OnInit } from '@angular/core';
import { RrboService } from 'src/app/services/rrbo/rrbo.service';

@Component({
  selector: 'app-rrbo',
  templateUrl: './rrbo.component.html',
  styleUrls: ['./rrbo.component.scss'],
})
export class RrboComponent implements OnInit {
  public selectedTab: number = 1;

  constructor(private service: RrboService) {}

  ngOnInit(): void {}

  setSelectedRrboTab(selectedTab: number): void {
    this.service.setSelectedRrboTab(selectedTab);
  }

  getSelectedRrboTab(): any {
    return this.service.getSelectedRrboTab();
  }
}
