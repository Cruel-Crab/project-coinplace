import {Component, OnInit} from '@angular/core';
import {CoinDetailsServiceService} from 'src/app/services/coin-details-service.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  responseJson = [];
  p: number = 0;
  totalCount: number = this.responseJson.length;
  tags: any = [];
  arr: any = [];

  constructor(private coinSrvc: CoinDetailsServiceService, private route: Router) {
  }

  ngOnInit(): void {
    this.showData();
    this.getTags();
  }

  getTags() {
    this.responseJson.forEach((result: any) => {
      // console.log(result.tags)
      this.tags.push(result.tags)
    })
    // console.log(JSON.stringify(this.tags))

    for (let i = 0; i < this.tags.length; i++) {
      for (let j = 0; j < this.tags[i].length; j++) {
        this.arr.push(this.tags[i]);
      }
    }

    console.log(this.arr)
  }

  showData() {
    this.coinSrvc.getAllData().subscribe(
      (res: any) => {
        console.log(res);
        this.responseJson = res;
      }
    )
  }

}
