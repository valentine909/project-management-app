import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/core/services/title.service';

@Component({
  selector: 'app-board-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.scss'],
})
export class BoardPageComponent implements OnInit {
  constructor(private title: TitleService) {}

  ngOnInit() {
    this.title.setTitle('Board');
    this.title.setHeaderTitle('BoardPage');
  }
}
