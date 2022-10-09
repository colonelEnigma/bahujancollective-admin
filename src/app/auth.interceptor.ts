import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = localStorage.getItem('ACCESS_TOKEN') ?? [];
        const auth = req.clone({
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'auth-token': token
            })
        });

        return next.handle(auth);
    }
}