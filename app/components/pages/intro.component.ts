import { Component, Input } from '@angular/core';
import { Router }           from '@angular/router';

@Component({
    selector: 'intro',
    templateUrl: 'app/components/pages/intro.component.html'
})

export class IntroComponent{
    title: string = 'Intro';
    outputText: string = "";
}