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

  public showDownladedIcon: boolean = false
  slideshowDelay = 2000;
  public coveragesList: any[] = []
  constructor(public service: LandingServiceService) {
    this.coveragesList = service.coveragesList
  }
  public downladsList: any[] = [
    {
      text: 'March 2023',
      id: 1,
      downladed: false
    },
    {
      text: 'August 2022',
      id: 2,
      downladed: false

    },
    {
      text: 'April 2022',
      id: 3,
      downladed: false
    }

  ]

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
  downloadNewsletter (id: number) {
    console.log(id)
    this.downladsList.find(item => {
     if( item.id === id) {
      item.downladed = true
     }
    })
  }
  public subscribeModalStep: number = 1;
  public isModalVisible: boolean = false;
  public emailVal: string = '';
  openModal() {
    this.isModalVisible = true;
    document.querySelector('.kline-app')?.classList.add('fixed');
  }
  onCloseModal() {
    this.isModalVisible = false;
    document.querySelector('.kline-app')?.classList.remove('fixed');
  }
  goToSecondStep(): void {
    if(this.emailVal === '' || !this.emailVal.includes('@') ) {
      alert('Email field was requared!!!')
    } else {
      this.subscribeModalStep = 2
    }

  }
}
