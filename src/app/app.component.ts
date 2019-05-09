import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-pwa';
  actualCat: string;

  constructor(
    private swUpdate: SwUpdate,
    private dataService: DataService
    ) {
  }

  ngOnInit() {
    this.getCat();

    this.swUpdate.available.subscribe(event => {
      console.log('A newer version is now available. Refresh the page now to update the cache');
    });
    this.swUpdate.checkForUpdate();
  }

  getCat() {
    this.dataService.getCat().subscribe((result) => {
      this.actualCat = result[0].url;
    });
  }
}
