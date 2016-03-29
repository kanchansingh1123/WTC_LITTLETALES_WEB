import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';


import {Login} from './components/login/login';
import {Home} from './components/home/home';
import {About} from './components/about/about';
import {NamesList} from './services/NameList';
import {ForgotPassword} from './components/forgot_password/forgot_password';
import {Registration} from './components/registration/registration';


@Component({
    selector: 'app',
    viewBindings: [NamesList]
})
@RouteConfig([
    {path: '/', component: Login, as: 'login'},
    {path: '/home', component: Home, as: 'home'},
    {path: '/about', component: About, as: 'about'},
    {path: '/forgotpassword', component: ForgotPassword, as: 'forgotpassword'},
    {path: '/registration', component: Registration, as: 'registration'},
])
@View({
    templateUrl: './app.html',
    directives: [RouterOutlet, RouterLink]
})
class App {
}


bootstrap(App, [routerInjectables]);
