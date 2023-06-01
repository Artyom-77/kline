import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LandingServiceService } from 'src/app/services/landing-service.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
  public cards_data: any
 constructor(private router: Router, private service:LandingServiceService) {}
 ngOnInit(): void {
  this.service.getCardData().subscribe(data =>{
    this.cards_data = data
  })
 }


}
