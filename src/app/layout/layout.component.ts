import { Component } from '@angular/core';
import { RegistroComponent } from '../components/registro/registro.component';
import { AdminComponent } from '../admin/admin.component';
import { RankingComponent } from '../components/ranking/ranking.component';
import { FooterComponent } from './footer/footer.component';
import { DesignComponent } from '../components/design/design/design.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from '../components/about/about.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RegistroComponent, AdminComponent, RankingComponent, FooterComponent, DesignComponent,NavigationComponent,AboutComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export default class LayoutComponent {

}
