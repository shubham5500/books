import { NgModule } from "@angular/core";
import { SocialLoginModule, AuthServiceConfig, LoginOpt } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { SignInComponent } from "./sign-in/sign-in.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";


const googleLoginOptions: LoginOpt = {
    scope: 'profile email https://www.googleapis.com/auth/books'
};

let config = new AuthServiceConfig([
    {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("1035047389640-4m9ohvl8n302n7ju63qnr97t91qbv3m9.apps.googleusercontent.com", googleLoginOptions)
    }
]);

export function provideConfig() {
    return config;
}

@NgModule({
    declarations:[
        SignInComponent
    ],
    imports: [
        NgbModule,
        CommonModule,
        SocialLoginModule
    ],
    providers: [
        {
            provide: AuthServiceConfig,
            useFactory: provideConfig
        }
    ],
    exports: [
        SocialLoginModule
    ]
})

export class AuthModule{

}