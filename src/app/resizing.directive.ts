import { Directive, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appResizing]'
})

export class ResizingDirective implements OnInit {

  @HostBinding('style.color') myFontStyle: string;
  @HostBinding('style.backgroundColor') myBackgroundColor: string;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseenter') mouseEnterEvent (eventData: Event) {
    this.myFontStyle = 'blueviolet';
    this.myBackgroundColor = 'lightgrey';
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventData: Event) {
    this.myFontStyle = 'black';
    this.myBackgroundColor = 'white';
  }

}
