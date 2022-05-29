import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class HcaptchaService {

  public isBrowser  = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(platformId)) {
      this.isBrowser = true;
    }
  }

  getToken(token: string): string {
    if  (this.isBrowser == true){
      const xhr = new XMLHttpRequest();
      //url de vuestro proyecto
      xhr.open('POST', 'http://0.0.0.0:5000/api/v1/verificarh/' + token +'/', false);
      xhr.send();
      console.log(xhr.responseText)

      const aux = JSON.parse(xhr.responseText);
      return  xhr.responseText ;
    } else {
      return 'false'
    }
  }

}
