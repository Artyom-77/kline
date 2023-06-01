import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LandingServiceService } from 'src/app/services/landing-service.service';
import { WebinarsService } from 'src/app/services/webinars/webinars.service';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-webinars',
  templateUrl: './webinars.component.html',
  styleUrls: ['./webinars.component.scss'],
})
export class WebinarsComponent implements OnInit {
  public uniqueId: any = uuidv4();
  public industryFilterItems: any[] = [
    'All',
    'Agrochemicals/Specialty Pesticides',
    'Beauty and Wellbeing',
    'Chemicals & Materials',
    'Energy',
    'Food & Nutrition',
    'Healthcare',
    'Industrial & Institutional Cleaning',
  ];
  public selectedIndustry: string = '';
  public webinarsList: any[] = [];
  public filteredWebinarsList: any[] = [];
  public dateList: string[] = ['All', '2021', '2022', '2023'];
  public selectedDate: string = '';
  public searchTerm: string = '';
  public router: any;
  public isOpen: boolean = false;
  public isDateOpen: boolean = false;
  public selectedOptions: string[] = [];
  public isModalVisible: boolean = false;
  public subscribeModalStep: number = 1;
  public emailVal: string = '';

  constructor(
    private webinaryService: WebinarsService,
    private routers: Router,
    private service:LandingServiceService
  ) {
    this.webinarsList = webinaryService.webinarsListDummyData;
    this.router = routers;
  }

  ngOnInit(): void {
    this.filteredWebinarsList = this.webinarsList;
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
  toggleDateDropdown() {
    this.isDateOpen = !this.isDateOpen;
  }

  onOutclick() {
    if (this.isOpen === true) {
      this.isOpen = false;
    }
  }
  onOutclickDate() {
    if (this.isDateOpen === true) {
      this.isDateOpen = false;
    }
  }

  openModal() {
    this.isModalVisible = true;
    document.querySelector('.kline-app')?.classList.add('fixed');
  }

  onCloseModal() {
    this.isModalVisible = false;
    document.querySelector('.kline-app')?.classList.remove('fixed');
  }

  toggleOption(option: string): void {
    this.selectedIndustry = option;
  }
  toggleDateOption(option: string): void {
    this.selectedDate = option;
  }
  goToSecondStep(): void {
    if(this.emailVal === '' || !this.emailVal.includes('@') ) {
      alert('Email field was requared!!!')
    } else {
      this.subscribeModalStep = 2
    }

  }

  removeFilters(): void {
    this.searchTerm = '';
    this.selectedDate = '';
    this.selectedIndustry = '';
    this.filteredWebinarsList = this.webinarsList;
  }

  @ViewChild('content', { static: true }) contentRef?: ElementRef ;
  @ViewChild('content1', { static: true }) contentRef1?: ElementRef ;
  @ViewChild('content2', { static: true }) contentRef2?: ElementRef ;

  scrollLeftPublished() {

    this.contentRef?.nativeElement.scrollBy({
      left: 586,
      behavior: 'smooth'
    });
  }

  scrollRightPublished() {

    this.contentRef?.nativeElement.scrollBy({
      left: -586,
      behavior: 'smooth'
    });
  }

  scrollLeftAnalysis() {

    this.contentRef1?.nativeElement.scrollBy({
      left: 586,
      behavior: 'smooth'
    });
  }

  scrollRightAnalysis() {
    this.contentRef1?.nativeElement.scrollBy({
      left: -586,
      behavior: 'smooth'
    });
  }

  scrollLeftOfferings() {

    this.contentRef2?.nativeElement.scrollBy({
      left: 586,
      behavior: 'smooth'
    });
  }

  scrollRightOfferings() {
    this.contentRef2?.nativeElement.scrollBy({
      left: -586,
      behavior: 'smooth'
    });
  }

  navigateToDetails(item: any) {

    this.service.setCardData(item)
    this.router.navigate(['card-details', item.id]);
  }

}
