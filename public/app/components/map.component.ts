import { Component, Renderer, ElementRef, AfterViewInit, OnInit } from '@angular/core';

// leaflet maps
// 
import * as L from "leaflet"
// declare let leaflet: any
// console.log(leaflet)

@Component({
    selector: 'leaflet',
    template: `<md-card ><map class="mat-card mat-elevation-z" id="mapid"></map></md-card>`,
    styleUrls: ['../../styles/map.css']
})

export class MapComponent implements OnInit, AfterViewInit {
    
    private map: any;

    constructor(private element: ElementRef, private myrender: Renderer) { }

    ngOnInit() { }

    ngAfterViewInit() {
        
        let el = this.element.nativeElement; // querySelector('map');

        this.map = new L.Map(el.querySelector('map'), {zoomControl: true})
        
        // remove from md card 'class' attribute 
        this.myrender.setElementAttribute(el.querySelector('md-card'), 'class', null);


        this.map.setView([51.505, -0.09], 13)

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
        
        let circle = L.circle([51.508, -0.11], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 500
        }).addTo(this.map),

        polygon = L.polygon([
            [51.509, -0.08],
            [51.503, -0.06],
            [51.51, -0.047]
        ]).addTo(this.map);

    
        L.marker([51.5, -0.09]).addTo(this.map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup()
            
        

    }

    
}