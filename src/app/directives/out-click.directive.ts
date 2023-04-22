import { Directive, ElementRef ,Output, EventEmitter, HostListener  } from '@angular/core';

@Directive({
  selector: '[outclick]'
})
export class OutClickDirective {

  @Output() outclick = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  onClick(target: HTMLElement) {
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside) {
      this.outclick.emit();
    }
  }

}
