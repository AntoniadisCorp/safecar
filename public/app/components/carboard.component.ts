import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute, Router, Params } from '@angular/router'
import { Observable } from 'rxjs/Observable';


@Component({

    // selector: 'carboard',
    templateUrl: '../../views/ng_partials/carboard.ejs',
    styleUrls: ['../../styles/carboard.scss']
})


export class CarboardListComponent implements OnInit, OnDestroy {

    // carboard: Observable<Carboard[]>;

    private selectedId: number;
    private sub: any;
     tiles = [
        {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
        {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
        {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
        {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    ];
    constructor(private route: ActivatedRoute, 
                private router: Router/*, 
                private service: HeroService*/ ) {

        
     }

    ngOnInit() {
        // this.route.params
        //     .switchMap((params: Params) =>
        //     this.service.getHero(params.get('id')))
        //     .subscribe((hero: Hero) => this.hero = hero);
        // this.sub = this.route.params
        // // (+) converts string 'id' to a number
        // .switchMap((params: Params) => this.service.getHero(+params['id']))
        // .subscribe((hero: Hero) => this.hero = hero);
    }


    ngOnDestroy() {
        // this.sub.unsubscribe()
    }
}