import { Component, Input } from '@angular/core';
import { Router }           from '@angular/router';

@Component({
    selector: 'contact',
    templateUrl: 'app/components/pages/contact.component.html'
})

export class ContactComponent{
    title: string = 'Contact';
    outputText: string = "";
}