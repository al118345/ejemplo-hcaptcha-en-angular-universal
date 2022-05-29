import {ChangeDetectorRef, Component, Inject, PLATFORM_ID} from '@angular/core';
import {HcaptchaService} from "./service/hcaptcha.service";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public robot: boolean;
  public expirado: boolean;
  public isBrowser: boolean;
  constructor(
    public captchaSerice: HcaptchaService,
    @Inject(PLATFORM_ID) public platformId ,
    private _changeDetectorRef: ChangeDetectorRef) {
    this.isBrowser = isPlatformBrowser(platformId)
    this.robot = true;
    this.expirado = false;
  }
  onVerify(token: string) {
    const auxiliar = this.captchaSerice.getToken(token)
    if (  auxiliar.includes('true') ) {
      this.robot = false;
    };
    // The verification process was successful.
    // You can verify the token on your server now.
  }

  onExpired(response: any) {
    this.expirado = true;
    this.robot = true;
    // The verification expired.
  }

  onError(error: any) {
    this.robot = true;
    // An error occured during the verification process.
  }
}
