class User {
    
    constructor() {
        
        this._id = undefined
        this.Firstname = undefined
        this.Lastname = undefined
        this.email = undefined
        this.mobile = 0
        this.username = undefined
        this.carmark = undefined
        this.carsecurity = undefined
        this.carmodelname = undefined
        this.day = undefined
        this.month = undefined
        this.year = undefined
        this.timeregister = Date.now()

        console.log('User is Inititialized..')
    }

    reset(usertype) {

        let UserToJson = {
            
             _id: this._id        = usertype._id,
            email: this.email      = usertype.email?  usertype.email : undefined,
            Firstname: this.Firstname  = usertype.Firstname,
            Lastname: this.Lastname   =  usertype.Lastname,
            mobile: this.mobile     = usertype.mobile? usertype.mobile : undefined,
            username: this.username   = usertype.mobile? usertype.mobile : usertype.email,
            carmark: this.carmark    = usertype.carmark,
            carsecurity: this.carsecurity = usertype.carsecurity,
            carnumber: this.carnumber = usertype.carnumber,
            carmodelname: this.carmodelname = usertype.carmodelname,
            day: this.day = usertype.day.title,
            month: this.month = usertype.month.title,
            year: this.year = usertype.year.title,
            timeregister: this.timeregister = usertype.timeregister
        }

        return UserToJson
    }

}

module.exports = new User()