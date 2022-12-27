import { Component,HostListener, OnInit } from '@angular/core';
@HostListener('window:scroll', ['$event'])


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    window.addEventListener('scroll', this.onWindowScroll, true)
  }
  onWindowScroll() {
    let element = document.querySelector('nav') as HTMLElement;
   
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  
  }
}
