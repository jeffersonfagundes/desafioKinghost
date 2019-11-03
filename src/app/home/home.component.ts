import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';
import { MarvelApiService } from '../marvel/shared/marvel-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  publicKey: string;
  privateKey: string;

  constructor(private router: Router, private marvelSvc: MarvelApiService) { }

  public acessMarvel() {
    this.marvelSvc.buildUrlApi(this.publicKey, Md5.hashStr('1' + this.privateKey + this.publicKey).toString());
    this.router.navigate(['herois'], { replaceUrl: true });
  }

  ngOnInit() {
  }
}
