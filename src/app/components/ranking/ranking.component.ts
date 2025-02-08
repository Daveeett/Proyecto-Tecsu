import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Ranking } from '../../interfaces/ranking';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
  standalone:true
})
export class RankingComponent implements OnInit {
 ranking: Ranking[] = [];

  constructor(private apiService: ApiService) {}
  
  ngOnInit() {
    this.obtenerRanking();
  }

  obtenerRanking() {
    this.apiService.obtenerRanking().subscribe({
      next: (response) => {
        console.log(response); 
        this.ranking = response.result;
        console.log(this.ranking); 
      },
      error: (error) => {
        alert('Error al cargar el ranking.');
      }
    });
  }
}
