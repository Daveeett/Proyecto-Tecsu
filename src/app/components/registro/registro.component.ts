import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Usuario } from '../../interfaces/usuario';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  standalone: true,
  imports: [
    FormsModule
  ],
})
export class RegistroComponent {
  user: Usuario = {
    cedula: '',
    email: '',
    nombreCompleto: '',
    telefono: '',
    nombreUsuario: '',
    contrasena: '',
  };

  constructor( private userService: ApiService) {}

  onSubmit() {
    this.userService.createUser(this.user).subscribe({
      next: (response) => {
        console.log('Usuario creado:', response);
        alert('¡Usuario creado exitosamente!');
        this.resetForm();
      },
      error: (error) => {
        console.error('Error al crear el usuario:', error);
        alert('Error al crear el usuario.');
      },
    });
  }

  private resetForm() {
    this.user = {
      cedula: '',
      email: '',
      nombreCompleto: '',
      telefono: '',
      nombreUsuario: '',
      contrasena: '',
    };
  }
}
