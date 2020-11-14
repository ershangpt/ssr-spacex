import {Component, Input, OnInit} from '@angular/core';
import { SpaceService } from 'src/app/services/space.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cards: any;
  constructor(private spaceService: SpaceService){}
  ngOnInit(): void {
    this.getData({});
    this.spaceService.filter.subscribe((data: any) => {
      this.getData(data);
    })
  }

  getData(data: any) {
    this.spaceService.getData(data).subscribe(data => {
      this.cards = data;
    })
  }
}
