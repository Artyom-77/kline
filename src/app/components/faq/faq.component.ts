import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  public faqData: any[] = [];
  public navigationFaq: any[] = [];
  public scopeFaq: any[] = [];
  public aboutFaq: any[] = [];
  public breadcrumpData: any[] = [{
    home: 'FAQ',
    // main: 'PAO Demand Deblend Model',
    // tab: 'Tabular View'
  }]
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('../../../assets/json/faqs_data.json')
      .subscribe((data: any) => {
        this.faqData = data;
        this.navigationFaq = data.filter((item) => item.section === 'one');
        this.scopeFaq = data.filter((item) => item.section === 'two');
        this.aboutFaq = data.filter((item) => item.section === 'three');
        console.log('this.faqData', this.faqData);
        console.log('this.navigationFaq', this.navigationFaq);
      });
  }
}
