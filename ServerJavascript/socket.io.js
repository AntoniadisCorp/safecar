var currentPrice = 99

module.exports = (appio) => {

    module = {}

    module.setSock = (appio) => {

        module.io = appio

        module.io.set("origins", "*:*")

        module.io.on('connection', function (socket) {
            
            console.log('Server Side socket connected')
            socket.emit('priceUpdate', currentPrice)

            socket.on('bid', function (data) {

                currentPrice = parseInt(data)
                socket.emit('priceUpdate',currentPrice)
                socket.broadcast.emit('priceUpdate',currentPrice)
            })
        })
    }
    
    return module
}