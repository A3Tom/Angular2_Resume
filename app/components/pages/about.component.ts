import { Component, Input } from '@angular/core';
import { Router }           from '@angular/router';

@Component({
    selector: 'about',
    templateUrl: 'app/components/pages/about.component.html'
})

export class AboutComponent{
    title: string = 'About Me';
    outputText: string = "";
}