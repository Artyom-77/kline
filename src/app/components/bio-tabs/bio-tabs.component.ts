import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio-tabs',
  templateUrl: './bio-tabs.component.html',
  styleUrls: ['./bio-tabs.component.scss']
})
export class BioTabsComponent implements OnInit, OnChanges {
  @Input() selectedTabName : any ;
  @Input() bioData : any ;
  public BioDetails: any ;
  ngOnInit(): void {
  }
  ngOnChanges() : void {
    this.BioDetails = this.bioData.criterias.find((item: any) => item.tabName === this.selectedTabName);
  }
}
