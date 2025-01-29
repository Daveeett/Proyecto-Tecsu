import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms';
import { DatePipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    DatePipe,
    NgFor
  ],
})
export class AdminComponent implements OnInit {
  usuarios: any[] = [];
  usuariosFiltrados: any[] = [];
  fechaFiltro: string = '';
  cantidadFiltro: number | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
  //  this.cargarUsuarios();
  }

  //cargarUsuarios() {
  //  this.apiService.obtenerUsuarios().subscribe(
  //    (response) => {
  //      this.usuarios = response;
  //      this.usuariosFiltrados = [...this.usuarios];
  //    },
  //    (error) => {
  //      alert('Error al cargar los datos de los usuarios.');
  //    }
  //  );
  //}
//
  aplicarFiltros() {
    this.usuariosFiltrados = this.usuarios.filter((usuario) => {
      const cumpleFecha =
        !this.fechaFiltro ||
        new Date(usuario.fecha).toISOString().split('T')[0] ===
          this.fechaFiltro;
      const cumpleCantidad =
        this.cantidadFiltro === null || usuario.cantidad >= this.cantidadFiltro;
    return cumpleFecha && cumpleCantidad;
    });
  }

  resetearFiltros() {
    this.fechaFiltro = '';
    this.cantidadFiltro = null;
    this.usuariosFiltrados = [...this.usuarios];
  }
}
