import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Login } from '../../interfaces/login';
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from '../registro/registro.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RegistroComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credenciales: Login = { email: '', clave: '' };

  constructor(private apiService: ApiService) {}

  onLogin() {
    this.apiService.login(this.credenciales).subscribe(
      response => {
        console.log('Inicio de sesión exitoso', response);
        alert('Inicio de sesión exitoso');
        const loginComponent = document.getElementById('loginComponent');
        if (loginComponent) {
          loginComponent.style.display = 'none';
        }
      },
      error => {
        console.error('Error en el inicio de sesión', error);
        alert('Error en el inicio de sesión');
        if (error.error && error.error.errors) {
          console.error('Errores de validación:', error.error.errors);
        }
      }
    );
  }

  displayRegistroComponent() { 
    const loginComponent = document.getElementById('loginComponent');
    if (loginComponent) {
      loginComponent.style.display = 'none';
    }
    
    const registroComponent = document.getElementById('registroComponent');
    if (registroComponent) {
      registroComponent.style.display = 'block';
    } else {
      console.error('El componente de registro no se encontró');
    }
  }
}
