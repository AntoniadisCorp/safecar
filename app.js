// becomes
var env = process.env.NODE_ENV || 'production'


var fss = require('fs')
, express = require('express')
, favicon = require('serve-favicon')
, fpath = require('path')
, httpsecurity = require('https')
, socket_io = require('socket.io')
, cookieParser = require('cookie-parser')
, bodyParser = require('body-parser')
// , flash    = require('connect-flash')
// Configuring Passport
, passport = require('passport')
, session = require('express-session')
, sessionOptions = { secret: 'keyboard cat cat', 
    resave: true, 
    saveUninitialized: true,
    cookie: { secure: true, httpOnly: true }
}
, key = fss.readFileSync('hacksparrow-key.pem')
, cert = fss.readFileSync('hacksparrow-cert.pem')
, options = {
    key: key,
    cert: cert
}

// , PORT = process.env.PORT || 3000
// , HOST = 'localhost' //prokopis.hopto.org
, passport = require('passport')
, mongo  = require('mongojs')
, db = mongo('mongodb://antoniadis:2a4b6c!8@ds161069.mlab.com:61069/car_brand', ['users'])


, app = express()





// APP ROUTES
, index = require('./routes')
, authen = require('./routes/auth')
, tasks = require('./routes/tasks')

// app.use(flash()); // use connect-flash for flash messages stored in session



// View Engine
if ('production' == env) {
   // configure stuff here
    app.use(favicon(__dirname + '/favicon.ico'))
    app.use(express.static(fpath.join(__dirname + '/favicon.ico')))
} else
    // app.use(favicon(__dirname + '/public/favicon.ico'))

    app.use(favicon(__dirname + '/favicon.ico'))
    app.use(express.static(fpath.join(__dirname + '/favicon.ico')))
app.set('views', express.static(fpath.join(__dirname + '/public/views')))
// app.set('fonts', express.static(fpath.join(__dirname + '/public/fonts')))

//app.use('/scripts', express.static(fpath.join(__dirname + '/public/node_modules')))
app.set('view engine', 'ejs')

app.engine('html', require('ejs').renderFile)

// Set Static Folder
app.use(express.static(fpath.join(__dirname + '/public')))
// cookieParser
app.use(cookieParser())
// Body Parser MW
app.use(bodyParser.json({limit: '2mb'}))
app.use(bodyParser.urlencoded({limit: '2mb', extended: false}))


// store session state in browser cookie, keep logged in user if exist from browser or server stopped
var cookieSession = require('cookie-session');
app.use(cookieSession({
    keys: ['keyboard cat cat1', 'keyboard cat cat2']
}))



app.use(session(sessionOptions))

app.use(passport.initialize())
app.use(passport.session())




// USE ROUTES
app.use('/', index)
app.use('/auth', authen)
app.use('/api', tasks)






app.all('*',  (req, res, next) => {

    // Use res.sendFile, as it streams instead of reading the file into memory.
    res.sendFile(fpath.join(__dirname + '/public/index.html'))

    // Cookies that have not been signed
    // console.log('Cookies: ', req.cookies)

    // Cookies that have been signed
    // console.log('Signed Cookies: ', req.signedCookies)
    // console.log('session Cookies: ', req.session)

    
})






// // catch 404 and forward to error handlerfpath.join(
// app.use( (req, res, next) => {

//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// })

// // will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    })
})

// var server = httpsecurity.createServer(https_options, app).listen(PORT/* , HOST */)

// appio = socket_io.listen(server)

// , io = require('./ServerJavascript/socket.io')('');

// io.setSock(appio)

var attach = (server) => {
    
    var appio = socket_io.listen(server)
    , io = require('./ServerJavascript/socket.io')('');
    io.attach(appio)
}

app.io = { attach: attach }

// console.log('HTTPS Server listening on %s:%s'/* , HOST */, PORT)


module.exports = app;

