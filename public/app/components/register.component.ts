import { Component, OnInit }       from '@angular/core'
import { Router }                  from '@angular/router'
import { User, UserBirthday, Scrollspy }      from '../classes/index'
import { UserService, AlertService }             from '../services/index'

@Component({
  
  templateUrl: '../../views/ng_partials/regProfile.ejs',
  styleUrls: ['../../styles/register.scss']
})

export class RegisterListComponent implements OnInit {

      loading = false
      
      // initialize User interface
      user = { information: new User() }

      // select directive for user Birthday
      birthday: Array<any>

      // current card properties
      Hiddencard: Boolean[]

      // Register Validation
      pattern = {}

      // button configuration
      ButtonText: string[]
      Buttoncolor: string[]

      // Window properties, like Scrollspy
      win: Scrollspy

      // left menu variable
      leftmenu = { selected: '', stepisDisabled: [] }

      constructor(private router: Router,
        private userService: UserService,
        private alertService: AlertService) {

        // initialization
        this.Hiddencard = []

        // initialize WindowRef
        this.win = new Scrollspy()

        // init birthday
        this.birthday = new Array()
       
      }

      ngOnInit() {


        // --- initialize User data ---
        // this.pattern.Firstname = '[α-ωΑ-Ω-ά-ώΆ-Ώ-a-zA-Z]*'

        // initialize Birthday
        this.birthday.push(this.user.information.day)
        this.birthday.push(this.user.information.month)
        this.birthday.push(this.user.information.year)
        
        // -----------------------------

        // set hidden cards to true
        this.Hiddencard[0] = true
        this.Hiddencard[1] = false
        this.Hiddencard[2] = false

        // initialize text of the button
        this.ButtonText = ['Επόμενο Βήμα', 'Επόμενο Βήμα', 'Ολοκλήρωση']
        this.Buttoncolor = ['success', 'success', 'primary']
        
        // go to first card
        setTimeout(() => this.win.smoothScroll('ss'+1), 100) // set 100 ms

        // set leftmenu not active
        this.leftmenu.selected = 'notexit'

        // set leftmenu step check circle and remove fonts
        this.leftmenu.stepisDisabled.push(true)
        this.leftmenu.stepisDisabled.push(true)
        this.leftmenu.stepisDisabled.push(true)
      }

      

      NextCard(card) {
        
        this.Hiddencard[card] = (card<3)? true : false
        setTimeout(() => this.win.smoothScroll('ss'+(card+1)), 100) // set 100 ms
        // console.log(`card: ${card}`)
      }

      register() {

        this.loading = true

        // first delete unwill properties of class user

        delete this.user.information.day["name"];
        delete this.user.information.day["what"];

        delete this.user.information.month["name"];
        delete this.user.information.month["what"];

        delete this.user.information.year["name"];
        delete this.user.information.year["what"];

        let userdata = this.user.information

        console.log(JSON.stringify(userdata))

        // Service to send data to node server with http response
        this.userService.create(userdata)
            .subscribe(
                user => {
                    // set success message and pass true paramater to persist the message after redirecting to the login page
                    console.log( `Register Response: `, user)
                    if (user.message) this.alertService.error(user.message)
                    else this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login'])
                    
                },
                error => {
                    this.alertService.error(error)
                    this.loading = false
                })
      }

}
