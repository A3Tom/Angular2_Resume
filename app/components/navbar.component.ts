import { Component, Input } from '@angular/core';
import { Router }           from '@angular/router';

@Component({
    selector: 'navbar-component',
    templateUrl: 'app/components/navbar.component.html'
})

export class NavbarComponent{
    title: string = 'Thomas Smith';
    tab1: string = 'Intro';
    tab2: string = 'Skills';
    tab3: string = 'Portfolio';
    tab4: string = 'About Me';
    tab5: string = 'Contact Me';
    tab6: string = 'Settings';
}