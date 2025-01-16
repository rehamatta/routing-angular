import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  srcImage:string = '';
  showImage(bgdark: HTMLDivElement,src:string):void {
    this.srcImage = src;
    bgdark.classList.remove('d-none');
  }
  hideBack(event:MouseEvent, darkBg:HTMLDivElement):void {
    if(event.target === darkBg) {
      darkBg.classList.add('d-none');
    }
  }
}
