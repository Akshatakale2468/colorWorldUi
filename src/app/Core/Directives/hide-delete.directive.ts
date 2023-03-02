import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[HideDelete]'
})
export class HideDeleteDirective {

  constructor(private eleRef : ElementRef) { 
    
  }

}
