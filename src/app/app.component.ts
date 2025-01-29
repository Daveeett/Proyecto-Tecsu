import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistroComponent } from "./components/registro/registro.component";
import { AdminComponent } from "./admin/admin.component";
import { RankingComponent } from './components/ranking/ranking.component';
import { FooterComponent } from "./layout/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoTecsu';
}
