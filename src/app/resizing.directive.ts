import { Directive, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appResizing]'
})
export class ResizingDirective implements OnInit {

  @HostBinding('style.color') myFontStyle: string;

  constructor() { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseenter') mouseEnterEvent (eventData: Event) {
    this.myFontStyle = 'blueviolet';
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventData: Event) {
    this.myFontStyle = 'transparent';
  }

}
