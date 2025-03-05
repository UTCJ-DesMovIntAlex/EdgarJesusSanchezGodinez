import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private apiUrl = 'https://api.jikan.moe/v4/anime';  // URL de la API pública de Jikan

  constructor(private http: HttpClient) {}

  // Método para buscar anime
  searchAnime(query: string): Observable<any> {
    const url = `${this.apiUrl}?q=${query}&limit=10`;  // Consulta con límite de 10 resultados
    return this.http.get<any>(url);  // Realiza la petición HTTP GET
  }
}
