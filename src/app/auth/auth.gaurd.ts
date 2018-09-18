import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Injectable()

export class AuthGaurd implements CanActivate{
    
    loggedIn: boolean;

    constructor(private sharedService: SharedService,
                private router: Router){
                    this.sharedService.logginEmitter.subscribe(
                        (success)=>{
                            this.loggedIn = success;
                        }
                    );
                }
                    
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot){
        if(this.loggedIn){
            return true;
        }else{
            this.router.navigate(['dashboard', 'login']);
        }
    }
}