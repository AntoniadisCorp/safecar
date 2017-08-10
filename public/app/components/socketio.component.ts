import { Component, OnInit } from '@angular/core'
import * as io from 'socket.io-client'

@Component({

    /* moduleId    : module.id, */
    selector    : 'auction-app',
    templateUrl : '../../views/ng_partials/socketio.ejs'
})

export class SocketComponent implements OnInit {
     
    price: number = 0.0
    socket = null
    bidValue = ''
    
    constructor() {}

    bid() {
        this.socket.emit('bid', this.bidValue)
        this.bidValue = ''
    }

    ngOnInit() {

        this.socket = io('https://localhost:3000');
        this.socket.on('priceUpdate', function(data){

            this.price = data
            console.log('Socket io Started..')
        }.bind(this))
    }
}