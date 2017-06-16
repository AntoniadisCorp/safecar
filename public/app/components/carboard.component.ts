import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute, Router, Params } from '@angular/router'
import { Observable } from 'rxjs/Observable';


@Component({

    selector: 'carboard',
    templateUrl: '../../views/main_partials/carboard.ejs',
    styleUrls: ['../../styles/carboard.scss']
})


export class CarboardListComponent implements OnInit, OnDestroy {

    // carboard: Observable<Carboard[]>;

    private selectedId: number;
    private sub: any;

    constructor(private route: ActivatedRoute, 
                private router: Router/*, 
                private service: HeroService*/ ) {

        
     }

    ngOnInit() {

        // this.sub = this.route.params
        // // (+) converts string 'id' to a number
        // .switchMap((params: Params) => this.service.getHero(+params['id']))
        // .subscribe((hero: Hero) => this.hero = hero);
    }


    ngOnDestroy() {
        this.sub.unsubscribe()
    }
}