import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {CoinDetailsServiceService} from "../../services/coin-details-service.service";
import {CoinsPrototype} from "../../coins";

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.css']
})
export class CoinDetailsComponent implements OnInit {
  myCoin!: CoinsPrototype;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private coinsService: CoinDetailsServiceService) { }

  ngOnInit(): void {
    this.bringMyCoin();
  }

  bringMyCoin(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.coinsService.getCoin(id)
      .subscribe(hero => this.myCoin = hero);
    console.log(this.myCoin)
  }

  goBack(): void {
    this.location.back();
  }

}
