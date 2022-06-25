import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  date = new Date();
  latestYear: number | undefined;

  constructor() { }

  ngOnInit(): void {
    this.latestYear = this.date.getFullYear();
  }

}
