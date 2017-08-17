import {Router} from 'aurelia-router';
import {autoinject} from 'aurelia-framework';

@autoinject()
export class Layout {
    constructor(private router: Router){
    }
}

