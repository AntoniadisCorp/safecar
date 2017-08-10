import { Component, EventEmitter, OnInit, ViewChild, ContentChild } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { AlertService, AuthenticationService, EventsService } from '../services/index'
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap'

@Component({
    
    styleUrls: ['../../styles/login.css'],
    templateUrl: '../../views/ng_partials/login.ejs'
})
 
export class LoginComponent implements OnInit {
// [- ]?
    model: any = {regex: /^(\+\d{1,3}?)?\d{10}?|([a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)+)$/gm }
    result: any = {message: ''}
    loading: boolean = false
    returnUrl: string
    show: boolean = true

    @ViewChild('p') public popover: NgbPopover;
    @ViewChild('showhideinput') public input;
    greeting = {};

    constructor (
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthenticationService,
        private alertService: AlertService, private eventsService: EventsService ) {}

    ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'
    }

    toggleShow() {
        this.show = !this.show
        this.input.nativeElement.type = this.show? 'text' : 'password';
    }
 
    login() {
        this.loading = true
        
        this.authService.signin(this.model.username, this.model.password)
            .subscribe(
                user => {
                    this.result = user
                    this.loading = false
                    if (user && this.result.message) {
                        
                        this.alertPopover({greeting: 'Give your email or mobile phone'})
                        this.router.navigate([this.returnUrl+'login'])
                    } else {
                        if (this.authService.isLoggedIn) {
                            // Get the redirect URL from our auth service
                            // If no redirect has been set, use the default
                            let redirect = this.returnUrl = this.authService.redirectUrl ? this.authService.redirectUrl : '/'
                            console.log(`Return Url ${this.returnUrl}`)
                            this.eventsService.broadcast('loggedin', this.result.Firstname, this.result.Lastname, this.result._id)
                            // Redirect the user
                            this.router.navigate([redirect]);
                        }
                    }
                    // remove error alert box
                    setTimeout( () => { this.result.message = '' }, 3000)
                },
                error => {
                    this.alertService.error(error)
                    this.loading = false
                    this.router.navigate([this.returnUrl+'login'])
                })
    }

    alertPopover(greeting: any): void {
        const isOpen = this.popover.isOpen();
        this.popover.close();
        if (greeting !== this.greeting || !isOpen) {
            this.greeting = greeting;
            this.popover.open(greeting);
        }
    }

    
}



