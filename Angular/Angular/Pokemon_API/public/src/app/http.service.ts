import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getPokemon();
  }
  getPokemon(){
      let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
      let abilities = "";
      bulbasaur.subscribe( data => {
        console.log('Your pokemons info', data);
        console.log(data.name + "s" + " abilities are " + data.abilities[0].ability.name + " and " + data.abilities[1].ability.name);

      abilities = data.abilities[1].ability.url;
      let sharedAbility = this._http.get(abilities);
      sharedAbility.subscribe( abilities => {
        console.log("Number of other Pokemon same abilities like Overgrow " + abilities.pokemon.length);
      })
      }
  }
}
