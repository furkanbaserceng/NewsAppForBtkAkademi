import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpStatusCode
} from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class GlobalHttpErrorHandlingInterceptor implements HttpInterceptor {

  constructor(private toastrService:ToastrService,private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(error => {
      switch (error.status) {
        case HttpStatusCode.Unauthorized:

          // this.userAuthService.refreshTokenLogin(localStorage.getItem("refreshToken"), (state) => {
          //   if (!state) {
          //     const url = this.router.url;
          //     if (url == "/products")
          //       this.toastrService.message("Sepete ürün eklemek için oturum açmanız gerekiyor.", "Oturum açınız!", {
          //         messageType: ToastrMessageType.Warning,
          //         position: ToastrPosition.TopRight
          //       });
          //     else
          //       this.toastrService.message("Bu işlemi yapmaya yetkiniz bulunmamaktadır!", "Yetkisiz işlem!", {
          //         messageType: ToastrMessageType.Warning,
          //         position: ToastrPosition.BottomFullWidth
          //       });
          //   }
          // }).then(data => {
          //   this.toastrService.message("Bu işlemi yapmaya yetkiniz bulunmamaktadır!", "Yetkisiz işlem!", {
          //     messageType: ToastrMessageType.Warning,
          //     position: ToastrPosition.BottomFullWidth
          //   });
          // });
          break;
        case HttpStatusCode.InternalServerError:
          this.toastrService.error("Sunucuya erişilmiyor!", "Sunucu hatası!");
            
          break;
        case HttpStatusCode.BadRequest:
          this.toastrService.error("Geçersiz istek yapıldı!", "Geçersiz istek!");
          break;
        case HttpStatusCode.NotFound:
          this.toastrService.error("Sayfa bulunamadı!", "Sayfa bulunamadı!");
          break;
        default:
          this.toastrService.error("Beklenmeyen bir hata meydana gelmiştir!", "Hata!");
           
          break;
      }

      
      return of(error);
    }));
  }
}
