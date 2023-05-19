import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  ngOnInit(): void {

  }
  onClickA(tab: number) {
    this.router.navigate(['synthetic-basestocks'], {queryParams:{ selectedMainTab: 2}});
  }
}
