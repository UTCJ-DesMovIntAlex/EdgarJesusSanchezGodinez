import { Component } from '@angular/core';
import { AnimeService } from '../services/anime.service';  // Importa el servicio

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  searchQuery: string = '';  // Almacena la consulta de búsqueda
  searchResults: any[] = [];  // Almacena los resultados de la búsqueda

  constructor(private animeService: AnimeService) {}

  // Método para hacer la búsqueda de anime
  searchAnime() {
    if (this.searchQuery.trim()) {
      this.animeService.searchAnime(this.searchQuery).subscribe(response => {
        this.searchResults = response.data;  // Asigna los resultados al array
      });
    }
  }
}
