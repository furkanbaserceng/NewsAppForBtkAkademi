import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,AfterViewInit {

  sources: any = [];
  articles:any = [];
  selectedNewsChannel: string="Top 10 Trending News!";
  @ViewChild(MatSidenav) sideNav!: MatSidenav;

  constructor(private observer : BreakpointObserver, 
    private changeDetector : ChangeDetectorRef, 
    private newsApi : NewsService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService){

      this.toastr.success('Welcome this app!', 'BtkAkademiNews Application Works!');

  }

  ngOnInit(): void {

    this.spinner.show();
  
    this.newsApi.initArticles().subscribe((res:any)=>{
      //console.log(res);
      this.articles = res.articles;
      this.spinner.hide();
    })
    this.newsApi.initSources().subscribe((res:any)=>{
      //console.log(res);
      this.sources = res.sources;
      this.spinner.hide();
    })

  }
  
  ngAfterViewInit(): void {
    this.sideNav.opened = true;
    this.observer.observe(['(max-width:800px)'])
    .subscribe((res)=>{
      if(res?.matches){
        this.sideNav.mode="over";
        this.sideNav.close();
      }else{
        this.sideNav.mode = 'side';
        this.sideNav.open();
      }
    })
    this.changeDetector.detectChanges();
  }
  searchSource(source:any){
    this.newsApi.getArticlesByID(source.id)
    .subscribe((res:any)=>{
      this.selectedNewsChannel = source.name
      this.articles = res.articles;
      this.spinner.hide();
    })
  }

}
