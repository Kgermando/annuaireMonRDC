import { Component } from '@angular/core';
import { NewsService } from 'src/app/service/news.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [ NewsService ],

})

export class AboutComponent {

  news = [];
  placeholders = [];
  pageSize = 10;
  pageToLoadNext = 1;
  loading = false;

  constructor(private newsService: NewsService) {}

  loadNext() {
    if (this.loading) { return }

    this.loading = true;
    this.placeholders = new Array(this.pageSize);
    this.newsService.load(this.pageToLoadNext, this.pageSize)
      .subscribe(news => {
        this.placeholders = [];
        this.news.push(...news);
        this.loading = false;
        this.pageToLoadNext++;
      });
  }

}
