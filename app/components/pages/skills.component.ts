import { Component, Input } from '@angular/core';
import { Router }           from '@angular/router';

@Component({
    selector: 'skills',
    templateUrl: 'app/components/pages/skills.component.html'
})

export class SkillsComponent{
    title: string = 'Skills';
    outputText: string = "";
}