import { MarvelApiService } from '../shared/marvel-api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characterSelect = [];
  errorMsg: string;
  allCharacters: Observable<any>;

  constructor(private router: Router, private marvelSvc: MarvelApiService) { }
  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.allCharacters = this.marvelSvc.getAllCharacters();
  }

  ngOnChange(characterId: any, event: { checked: any; }) {
    const checked = event.checked;
    if (checked) {
      this.characterSelect.push(characterId);
    } else {
      const index = this.characterSelect.indexOf(characterId);
      this.characterSelect.splice(index, 1);
    }
  }

  save() {
    this.router.navigate(['historias', { charactersId: this.characterSelect }], { replaceUrl: true });
  }
}
