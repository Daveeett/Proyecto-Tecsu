import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { guardarpuntos } from '../../interfaces/guardarpuntos';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-puntos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './puntos.component.html',
  styleUrl: './puntos.component.css'
})
export class PuntosComponent {
  usuarioCedula : string = '';
  cantidadBasura: number = 0;

  constructor(private apiService: ApiService) {}

  onSubmit() {
    const puntos: guardarpuntos = {
      usuarioCedula: this.usuarioCedula,
      cantidadBasura: this.cantidadBasura
    };

    this.apiService.guardarPuntos(puntos).subscribe(response => {
      console.log('Puntos guardados:', response);
      alert('Puntos guardados exitosamente!');
    }, error => {
      console.error('Error al guardar puntos:', error);
      alert('Inténtalo de nuevo, asegúrate de colocar bien tu cedula!');
    });
    this.usuarioCedula="";
    this.cantidadBasura=0;
  }
}
