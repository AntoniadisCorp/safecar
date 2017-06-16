/**
 * User interface date
 */

interface date {

    name: Array<any>
    title: string,
    what: string
}

/**
 * User class UserBirthday
 */

export class UserBirthday {
    
    day: any
    month: any
    year: any
    timeregister: Date

    
    constructor() {

        // initialize object Date
        this.timeregister = new Date()

        this.day = {
          title: '',
          what: 'Ημέρα',
          name: []
        }, 

        this.month = {
          title: '',
          what: 'Μήνας',
          name: [
            { value: 'Ιανουαρίου' },
            { value: 'Φεβρουαρίου' },
            { value: 'Μαρτίου' },
            { value: 'Απριλίου' },
            { value: 'Μαίου' },
            { value: 'Ιουνίου' },
            { value: 'Ιουλίου' },
            { value: 'Αυγούστου' },
            { value: 'Σεπτεμβρίου' },
            { value: 'Οκτωβρίου' },
            { value: 'Δεκεμβρίου' }
          ]
        },

        this.year = {
          title: '',
          what: 'Έτος',
          name: []
        }

        this.setDay(this.day)
        // this.setMonth(this.month)
        this.setYear(this.year)
    }

    private setDay(dateobj: date) {

        // initialize days
        for (let i = 0; i < 31; i++) dateobj.name.push({ value: i+1  })
    }

    // private setMonth(dateobj: date) {
    // }

    private setYear(dateobj: date) {

        // get full current year
        let today = this.timeregister.getFullYear()

        // initialize years
        for (var i=today; i>=today-100; i--) dateobj.name.push({ value: i })
    }

}

export class User extends UserBirthday {
    
    _id: string
    Firstname: string
    Lastname: string
    email: string
    mobile: number
    carmark: string
    carsecurity: string
    carmodelname: string
    carnumber: string
    password: string
    
    constructor() {
        super()
    }

}

