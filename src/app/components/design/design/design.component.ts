import { Component } from '@angular/core';
import { LoginComponent } from "../../login/login.component";
import { RegistroComponent } from '../../registro/registro.component';

@Component({
  selector: 'app-design',
  standalone: true,
  imports: [LoginComponent,RegistroComponent],
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css'] 
})
export class DesignComponent {
  constructor() {

  }
  displayLoginComponent() { 
    const registroComponent = document.getElementById('registroComponent');
    if (registroComponent) {
      registroComponent.style.display = (registroComponent.style.display === 'none' || registroComponent.style.display === '') ? 'block' : 'none';
    }
  }

/*   displayLoginComponent() { 
    const loginComponent = document.getElementById('loginComponent');
    if (loginComponent) {
      loginComponent.style.display = 'block';
    }
  } */
}