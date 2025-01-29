import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
  standalone:true
})
export class RankingComponent implements OnInit {
 ranking: any[] = [];

  constructor(private apiService: ApiService) {}
  
  ngOnInit() {
  //  this.obtenerRanking();
  }
//
  //obtenerRanking() {
  //  this.apiService.obtenerRanking().subscribe(
  //    (response) => {
  //      this.ranking = response;
  //    },
  //    (error) => {
  //      alert('Error al cargar el ranking.');
  //    }
  //  );
  //}
}
