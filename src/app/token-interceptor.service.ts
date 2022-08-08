import { Injectable,Injector } from '@angular/core';
import {  HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector, private auth:AuthService) { }

  intercept(req:any, next:any)
   {
      let auth=this.injector.get(AuthService)
      let tokenizedReq= req.clone()
      {
        setHeaders:
        {
          Authorization:`Bearer${auth.getToken()}`
        }
      }
      return next.handle(tokenizedReq)
    }
   
}
