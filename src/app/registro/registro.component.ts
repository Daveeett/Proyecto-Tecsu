import { Component } from '@angular/core';
import { ApiService } from '../api.service';
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
  nombre = '';
  cedula = '';

  constructor(private apiService: ApiService) {}

  enviarDatos() {
    if (this.nombre && this.cedula) {
      const cedulaRegex = /^[0-9]{10}$/; // regex para cédula de 10 dígitos
      if (!cedulaRegex.test(this.cedula)) {
        alert('El número de cédula debe tener 10 dígitos.');
        return;
      }
      this.apiService.registrarUsuario(this.nombre, this.cedula).subscribe(
        (response) => {
          alert('¡Gracias por contribuir al reciclaje!:D');
          this.nombre = '';
          this.cedula = '';
        },
        (error) => {
          alert('Error al registrar los datos.');
        }
      );
    }
  }
}
