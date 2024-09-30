import { HttpInterceptorFn } from '@angular/common/http';

export const customInterceptor: HttpInterceptorFn = (req, next) => {
  // debugger;
 
  if (req.url.startsWith('http://localhost:9000/api/v2/user') ||
  req.url.startsWith('http://localhost:9000/api/v2/user/save') ||
  req.url.startsWith('http://localhost:9000/api/v2/user/dish') ||
  req.url.startsWith('http://localhost:9000/api/v5/user/dish') ||
  req.url.startsWith('http://localhost:9000/api/v5/user/')||
  req.url.startsWith('http://localhost:9000/api/v5/user/save')) {
  const myToken = localStorage.getItem('token');
    if (myToken) {
      // Clone the request and add the Authorization header
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${myToken}`
        }
      });
      // Pass on the cloned request instead of the original request
      return next(authReq);
    }
  }
 
  return next(req);
};
