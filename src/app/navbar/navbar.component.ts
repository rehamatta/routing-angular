import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isScrolledDown = false;

  @HostListener('window:scroll') onWindowScroll() {
    if(scrollY > 0) {
      this.isScrolledDown = true;
    } else {
      this.isScrolledDown = false;
    }
  }
  closeNavbar(): void {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show'); // This will collapse the navbar
    }
  }


}
