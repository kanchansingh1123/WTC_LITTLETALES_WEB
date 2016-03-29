import {Component, View} from 'angular2/angular2';
import {Router, RouteParams} from 'angular2/router';

@Component ( {
    selector: 'login'
})

@View ({
    templateUrl: './components/login/login.html?v=<%= VERSION %>'
})

export class Login {
    constructor (
        private _router: Router
    ) {}
    
    ngOnInit() {
        
    }
    
    login() {
        this.loggedIn('test');
    }
    
    loggedIn(test) {
        this._router.navigate('/home');
    }
}