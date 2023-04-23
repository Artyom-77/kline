import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class WebinarsService {
  public uniqueId: any = uuidv4();

  public webinarsListDummyData: any[] = [
    {
      id: this.uniqueId,
      img: '../../../assets/images/webinars/card-1.png',
      title: 'Trendwatch: The Global Lubricant Additives Market',
      industry: 'Energy',
      date: 'April 2022',
      desc: 'A series of emerging trends are transforming the global lubricants additives industry. Among them: green lubricant additives, new specifications...',
    },
    {
      id: this.uniqueId,
      img: '../../../assets/images/webinars/card-2.png',
      title: 'The Great Potential of the Wind Power Industry',
      industry: 'Energy',
      date: 'March 2023',
      desc: 'Continuous industry growth, driven by clean energy and decarbonization targets, creates up-and-coming space for development for stakeholders operating on the...',
    },
    {
      id: this.uniqueId,
      img: '../../../assets/images/webinars/card-3.png',
      title:
        'Specialty Actives in Personal Care: New Market Trends and Opportunities',
      industry: 'Chemicals & Materials',
      date: 'February 2023',
      desc: 'Multifunctional actives are gaining steam among cosmetic makers. One powerhouse ingredient is niacinamide, thanks to its multi-faceted benefits. Botanicals and...',
    },
    {
      id: this.uniqueId,
      img: '../../../assets/images/webinars/card-4.png',
      title: 'Rat Out! Rodent Control Market Overview',
      industry: 'Agrochemicals/Specialty Pesticides',
      date: 'February 15, 2023',
      desc: 'As rodent control is essential to prevent the spread of disease, cities, businesses, farmers, and consumers are utilizing several different...',
    },
    {
      id: this.uniqueId,
      img: '../../../assets/images/webinars/card-5.png',
      title:
        "Who's Next? The Emerging Indie Beauty Companies Shaping the Global Beauty Market",
      industry: 'Beauty and Wellbeing',
      date: 'December 2022',
      desc: 'Indie beauty drives innovation in the worldwide cosmetics industry. Watch this informative webinar when we take a deep dive into...',
    },
    {
      id: this.uniqueId,
      img: '../../../assets/images/webinars/card-6.png',
      title: 'Plant-Based Solutions for Heart Health',
      industry: 'Food & Nutrition',
      date: 'November 2022',
      desc: 'A growing flexitarian, vegan, and vegetarian population is projected to positively impact the global plant-based industry in the coming years...',
    },
    {
      id: this.uniqueId,
      img: '../../../assets/images/webinars/card-7.png',
      title: 'State of the Jan/San Industry',
      industry: 'Industrial & Institutional Cleaning',
      date: 'November 2022',
      desc: 'Labor shortages are impacting commercial end users, some of whom are using technology, such as IoT and robotics, to help...',
    },
    {
      id: this.uniqueId,
      img: '../../../assets/images/webinars/card-1.png',
      title: 'Trendwatch: The Global Lubricant Additives Market',
      industry: 'Energy',
      date: 'April 2022',
      desc: 'A series of emerging trends are transforming the global lubricants additives industry. Among them: green lubricant additives, new specifications...',
    },
    {
      id: this.uniqueId,
      img: '../../../assets/images/webinars/card-2.png',
      title: 'The Great Potential of the Wind Power Industry',
      industry: 'Energy',
      date: 'March 2023',
      desc: 'Continuous industry growth, driven by clean energy and decarbonization targets, creates up-and-coming space for development for stakeholders operating on the...',
    },
    {
      id: this.uniqueId,
      img: '../../../assets/images/webinars/card-3.png',
      title:
        'Specialty Actives in Personal Care: New Market Trends and Opportunities',
      industry: 'Chemicals & Materials',
      date: 'February 2023',
      desc: 'Multifunctional actives are gaining steam among cosmetic makers. One powerhouse ingredient is niacinamide, thanks to its multi-faceted benefits. Botanicals and...',
    },
    {
      id: this.uniqueId,
      img: '../../../assets/images/webinars/card-4.png',
      title: 'Rat Out! Rodent Control Market Overview',
      industry: 'Agrochemicals/Specialty Pesticides',
      date: 'February 15, 2023',
      desc: 'As rodent control is essential to prevent the spread of disease, cities, businesses, farmers, and consumers are utilizing several different...',
    },
    {
      id: this.uniqueId,
      img: '../../../assets/images/webinars/card-5.png',
      title:
        "Who's Next? The Emerging Indie Beauty Companies Shaping the Global Beauty Market",
      industry: 'Beauty and Wellbeing',
      date: 'December 2022',
      desc: 'Indie beauty drives innovation in the worldwide cosmetics industry. Watch this informative webinar when we take a deep dive into...',
    },
    {
      id: this.uniqueId,
      img: '../../../assets/images/webinars/card-6.png',
      title: 'Plant-Based Solutions for Heart Health',
      industry: 'Food & Nutrition',
      date: 'November 2022',
      desc: 'A growing flexitarian, vegan, and vegetarian population is projected to positively impact the global plant-based industry in the coming years...',
    },
    {
      id: this.uniqueId,
      img: '../../../assets/images/webinars/card-7.png',
      title: 'State of the Jan/San Industry',
      industry: 'Industrial & Institutional Cleaning',
      date: 'November 2022',
      desc: 'Labor shortages are impacting commercial end users, some of whom are using technology, such as IoT and robotics, to help...',
    },
    {
      id: this.uniqueId,
      img: '../../../assets/images/webinars/card-1.png',
      title: 'Trendwatch: The Global Lubricant Additives Market',
      industry: 'Energy',
      date: 'April 2022',
      desc: 'A series of emerging trends are transforming the global lubricants additives industry. Among them: green lubricant additives, new specifications...',
    },
    {
      id: this.uniqueId,
      img: '../../../assets/images/webinars/card-2.png',
      title: 'The Great Potential of the Wind Power Industry',
      industry: 'Energy',
      date: 'March 2023',
      desc: 'Continuous industry growth, driven by clean energy and decarbonization targets, creates up-and-coming space for development for stakeholders operating on the...',
    },
    {
      id: this.uniqueId,
      img: '../../../assets/images/webinars/card-3.png',
      title:
        'Specialty Actives in Personal Care: New Market Trends and Opportunities',
      industry: 'Chemicals & Materials',
      date: 'February 2023',
      desc: 'Multifunctional actives are gaining steam among cosmetic makers. One powerhouse ingredient is niacinamide, thanks to its multi-faceted benefits. Botanicals and...',
    },
    {
      id: this.uniqueId,
      img: '../../../assets/images/webinars/card-4.png',
      title: 'Rat Out! Rodent Control Market Overview',
      industry: 'Agrochemicals/Specialty Pesticides',
      date: 'February 15, 2023',
      desc: 'As rodent control is essential to prevent the spread of disease, cities, businesses, farmers, and consumers are utilizing several different...',
    },
    {
      id: this.uniqueId,
      img: '../../../assets/images/webinars/card-5.png',
      title:
        "Who's Next? The Emerging Indie Beauty Companies Shaping the Global Beauty Market",
      industry: 'Beauty and Wellbeing',
      date: 'December 2022',
      desc: 'Indie beauty drives innovation in the worldwide cosmetics industry. Watch this informative webinar when we take a deep dive into...',
    },
    {
      id: this.uniqueId,
      img: '../../../assets/images/webinars/card-6.png',
      title: 'Plant-Based Solutions for Heart Health',
      industry: 'Food & Nutrition',
      date: 'November 2022',
      desc: 'A growing flexitarian, vegan, and vegetarian population is projected to positively impact the global plant-based industry in the coming years...',
    },
    {
      id: this.uniqueId,
      img: '../../../assets/images/webinars/card-7.png',
      title: 'State of the Jan/San Industry',
      industry: 'Industrial & Institutional Cleaning',
      date: 'November 2022',
      desc: 'Labor shortages are impacting commercial end users, some of whom are using technology, such as IoT and robotics, to help...',
    },
    {
      id: this.uniqueId,
      img: '../../../assets/images/webinars/card-1.png',
      title: 'Trendwatch: The Global Lubricant Additives Market',
      industry: 'Energy',
      date: 'April 2022',
      desc: 'A series of emerging trends are transforming the global lubricants additives industry. Among them: green lubricant additives, new specifications...',
    },
    {
      id: this.uniqueId,
      img: '../../../assets/images/webinars/card-2.png',
      title: 'The Great Potential of the Wind Power Industry',
      industry: 'Energy',
      date: 'March 2023',
      desc: 'Continuous industry growth, driven by clean energy and decarbonization targets, creates up-and-coming space for development for stakeholders operating on the...',
    },
    {
      id: this.uniqueId,
      img: '../../../assets/images/webinars/card-3.png',
      title:
        'Specialty Actives in Personal Care: New Market Trends and Opportunities',
      industry: 'Chemicals & Materials',
      date: 'February 2023',
      desc: 'Multifunctional actives are gaining steam among cosmetic makers. One powerhouse ingredient is niacinamide, thanks to its multi-faceted benefits. Botanicals and...',
    },
    {
      id: this.uniqueId,
      img: '../../../assets/images/webinars/card-4.png',
      title: 'Rat Out! Rodent Control Market Overview',
      industry: 'Agrochemicals/Specialty Pesticides',
      date: 'February 15, 2023',
      desc: 'As rodent control is essential to prevent the spread of disease, cities, businesses, farmers, and consumers are utilizing several different...',
    },
    {
      id: this.uniqueId,
      img: '../../../assets/images/webinars/card-5.png',
      title:
        "Who's Next? The Emerging Indie Beauty Companies Shaping the Global Beauty Market",
      industry: 'Beauty and Wellbeing',
      date: 'December 2022',
      desc: 'Indie beauty drives innovation in the worldwide cosmetics industry. Watch this informative webinar when we take a deep dive into...',
    },
    {
      id: this.uniqueId,
      img: '../../../assets/images/webinars/card-6.png',
      title: 'Plant-Based Solutions for Heart Health',
      industry: 'Food & Nutrition',
      date: 'November 2022',
      desc: 'A growing flexitarian, vegan, and vegetarian population is projected to positively impact the global plant-based industry in the coming years...',
    },
    {
      id: this.uniqueId,
      img: '../../../assets/images/webinars/card-7.png',
      title: 'State of the Jan/San Industry',
      industry: 'Industrial & Institutional Cleaning',
      date: 'November 2022',
      desc: 'Labor shortages are impacting commercial end users, some of whom are using technology, such as IoT and robotics, to help...',
    },
  ];

  constructor() {}
}
