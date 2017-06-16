import { Component, EventEmitter, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { AlertService, AuthenticationService, EventsService } from '../services/index'

@Component({

    templateUrl: '../../views/ng_partials/login.ejs'
})
 
export class LoginComponent implements OnInit {

    model: any = {message: ''}
    loading: boolean = false
    returnUrl: string

    constructor (
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthenticationService,
        private alertService: AlertService, private eventsService: EventsService ) {}

    ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'
    }
 
    login() {
        this.loading = true
        
        this.authService.login(this.model.username, this.model.password)
            .subscribe(
                user => {
                    this.model = user
                    this.loading = false
                    if (user && this.model.message) {
                        this.alertService.error(this.model.message)
                        this.router.navigate([this.returnUrl+'login'])
                    } else {
                        if (this.authService.isLoggedIn) {
                            // Get the redirect URL from our auth service
                            // If no redirect has been set, use the default
                            let redirect = this.returnUrl = this.authService.redirectUrl ? this.authService.redirectUrl : '/'
                            console.log(`Return Url ${this.returnUrl}`)
                            this.eventsService.broadcast('loggedin', this.model.Firstname, this.model.Lastname)
                            // Redirect the user
                            this.router.navigate([redirect]);
                        }
                    }
                },
                error => {
                    this.alertService.error(error)
                    this.loading = false
                    this.router.navigate([this.returnUrl+'login'])
                })
    }

    
}