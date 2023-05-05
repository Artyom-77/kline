import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rrbo',
  templateUrl: './rrbo.component.html',
  styleUrls: ['./rrbo.component.scss'],
})
export class RrboComponent implements OnInit {
  public selectedTab: number = 2;

  constructor() {}

  ngOnInit(): void {}
}
