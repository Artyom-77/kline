import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent {
  @Input() title: string | undefined;
  @Input() desc: string | undefined;
  @Input() subtitle: string | undefined;
  @Input() breadcrumpData: any[] | undefined;
}
