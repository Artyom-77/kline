import { Component, HostListener, OnInit } from '@angular/core';
import { LandingServiceService } from '../services/landing-service.service'

@Component({
  selector: 'app-lending-page',
  templateUrl: './lending-page.component.html',
  styleUrls: ['./lending-page.component.scss'],
})
export class LendingPageComponent implements OnInit {

  public slides = [
    {
      imageUrl: '../../assets/images/bg-image.png',
      caption: 'Latest Updates',
      desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },
    {
      imageUrl: '../../assets/images/cavorage-bg.png',
      caption: 'Latest Updates',
      desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },
    {
      imageUrl: '../../assets/images/bg-image.png',
      caption: 'Latest Updates',
      desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },
  ];


  slideshowDelay = 2000;
  public coveragesList: any[] = []
  constructor(public service: LandingServiceService) {
    this.coveragesList = service.coveragesList
  }

  ngOnInit(): void {
  }

  scrollPosition = 0;

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.scrollPosition = window.scrollY;
  }

  valueChanged(e: any) {
    this.slideshowDelay = e.value ? 2000 : 0;
  }
}
