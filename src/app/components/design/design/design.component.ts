import { Component } from '@angular/core';
import { LoginComponent } from "../../login/login.component";

@Component({
  selector: 'app-design',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css'] 
})
export class DesignComponent {
  constructor() {

  }

  displayLoginComponent() { 
    const loginComponent = document.getElementById('loginComponent');
    if (loginComponent) {
      loginComponent.style.display = 'block';
    }
  }
}