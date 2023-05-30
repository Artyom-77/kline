import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {

  public faqData: any[] = []

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
    .get('../../../assets/json/faqs_data.json')
    .subscribe((data: any) => {
      this.faqData = data
      console.log('this.faqData', this.faqData)
    });
  }
}
