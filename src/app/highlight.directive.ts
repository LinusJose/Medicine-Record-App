import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor( private el:ElementRef) { 
    el.nativeElement.style.backgroundColor="rgb(15, 197, 197)"
    el.nativeElement.style.height="60px"
    el.nativeElement.style.padding="10px"
    el.nativeElement.style.color="#fff"
  }
  
}
