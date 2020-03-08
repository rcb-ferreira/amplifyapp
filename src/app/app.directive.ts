import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { element } from 'protractor';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '.nav-item'
})

export class HighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    const el = this.el.nativeElement;
    const col = el.parentElement.getElementsByClassName('nav-item');
    this.toggleClass(el, col);
  }

  @HostListener('mouseleave') onMouseLeave() {
  }

  toggleClass(nativeElement, collections) {
    Array.from(collections).forEach( (item) => {
      this.renderer.removeClass(item, 'active');
    });

    this.renderer.addClass(nativeElement, 'active');
  }

}
