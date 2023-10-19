import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { PokemonInformation } from '../models';

@Injectable()
export class GetPokemonService {
  pokemonApiURL = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(
    private http: HttpClient
  ) {}

  getInformation(request: string): Observable<PokemonInformation> {
    const pokemonURL = this.pokemonApiURL + request;

    const response = new Observable<PokemonInformation> (observer => {
        this.http.get<PokemonInformation>(pokemonURL)
        .subscribe(
          response => {
            observer.next(response);
            observer.complete();
          },
          error => {
            observer.error(error);
          }
        )
      })

      return this.http.get<PokemonInformation>(pokemonURL);
    }
}
