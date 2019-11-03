import { MarvelApiService } from '../shared/marvel-api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  errorMsg: string;
  comicsAny: Observable<any>;

  constructor(private route: ActivatedRoute, private marvelSvc: MarvelApiService) { }
  ngOnInit() {
    this.getComics();
  }

  getComics() {
    const characterSelect = this.route.snapshot.paramMap.get('charactersId');
    this.comicsAny = this.marvelSvc.getComicsByIdCharacters(characterSelect);

  }
}
