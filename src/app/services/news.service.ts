import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(
    private http: HttpClient,
    @Inject('api_key') private secretKey: string,
    @Inject('base_url') private baseUrl: string
  ) {}

  initSources() {
    return this.http.get(
      this.baseUrl + '/sources?language=en&apiKey=' + this.secretKey
    );
  }

  initArticles() {
    return this.http.get(
      this.baseUrl +
        '/top-headlines?sources=techcrunch&apiKey=' +
        this.secretKey
    );
  }

  getArticlesByID(source: String) {
    return this.http.get(
      this.baseUrl +
        '/top-headlines?sources=' +
        source +
        '&apiKey=' +
        this.secretKey
    );
  }
}
