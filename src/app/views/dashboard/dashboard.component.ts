import { Component, OnInit } from '@angular/core';
import { GetPokemonService } from '../../services';
import { PokemonInformation } from '../../models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  view = false;
  pokemonList: PokemonInformation[] = [];

  constructor(public getPokemonService: GetPokemonService) {}

  ngOnInit(): void {
    this.loadAllPokemon();
  }

  loadAllPokemon() {
    const maxPokemon = 1017; 

    for (let i = 1; i <= maxPokemon; i++) {
      this.getPokemonService.getInformation(i.toString()).subscribe(
        (response: PokemonInformation) => {
          this.pokemonList.push(response);
          if (i === maxPokemon) {
            this.view = true;
          }
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
