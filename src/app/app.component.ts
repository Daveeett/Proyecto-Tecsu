import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistroComponent } from "./registro/registro.component";
import { AdminComponent } from "./admin/admin.component";
import { RankingComponent } from './ranking/ranking.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegistroComponent, AdminComponent,RankingComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoTecsu';
}
