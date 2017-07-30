import { Component, OnInit, Renderer, animate, style, trigger, transition } from '@angular/core'
import { Router } from '@angular/router'
import { AlertService, AuthenticationService, EventsService } from '../services/index'

@Component({

    selector    : 'navig',
    templateUrl : '../../views/main_partials/header.ejs',
    animations  : [
        trigger(
            'myAnimation',
            [
                transition(
                    ':enter', [
                    style({transform: 'translateX(100%)', opacity: 0}),
                    animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
                    ]),
                transition(
                    ':leave', [
                    style({transform: 'translateX(0)', 'opacity': 1}),
                    animate('500ms', style({transform: 'translateX(100%)', opacity: 0})),
                    
                    ])
            ]
        )
    ],
    styleUrls: ['../../styles/header.scss']
})




export class MenuComponent implements OnInit {

    //collapse content
    public collapse = { 
        NavbarisCollapsed: false, 
        searchisCollapsed: false,
        sbtn: '' }

    custommerStr = {}

    constructor(private renderer: Renderer, private authService: AuthenticationService,
        private alertService: AlertService, private router: Router, private eventsService: EventsService) {
        
        eventsService.on('loggedin', (a, b, c) => {
            
                alertService.success(`User ${a} ${b} connected`)
                this.loginListener()
        })
    }

    setHeight(el, height) {
        this.renderer.setElementStyle(el, 'height', height + 'px'), this.loginListener()
    }

    ngOnInit () {
        this.collapse.NavbarisCollapsed = !this.collapse.NavbarisCollapsed
        this.collapse.searchisCollapsed = !this.collapse.searchisCollapsed
        this.loginListener()
        
    }

    onNavbar() {
        this.collapse.NavbarisCollapsed = !this.collapse.NavbarisCollapsed
    }

    onSearch() {
        this.collapse.searchisCollapsed = !this.collapse.searchisCollapsed
    }

    goToHome() { this.router.navigate(['/']) }

    goToCarboard() {
        let loggedin = JSON.parse(localStorage.getItem('currentUser'))
        this.router.navigate(['/carboard', loggedin._id ])
    }

    goToRegistration() { this.router.navigate(['/register']) }

    login() { this.router.navigate(['/login']), this.loginListener() }

    
    logout() {
         this.authService.logout().subscribe(
                data => { this.alertService.success( 'User ' + data), this.loginListener() },
                error => { this.alertService.error(  error + ' User Disconnected'), this.loginListener() }
            )
    }

    logInOutAction() {
        
        if( this.authService.isLoggedIn ){
            this.logout(), this.loginListener()
        } 
        else this.login()
    }
    

    loginListener () {

        this.authService.getLoggedIn()
            .subscribe(
                data => {
                    console.log('loginListener at menu bar: ' + data)
                    this.custommerStr = data? {status: 'logout', color: 'warning'} 
                        : {status: 'login', color: 'primary'} },
                error => this.alertService.error(  error + ' on getting LoggedIn')
            )
    }

}