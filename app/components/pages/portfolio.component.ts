import { Component, Input } from '@angular/core';
import { Router }           from '@angular/router';

@Component({
    selector: 'portfolio',
    templateUrl: 'app/components/pages/portfolio.component.html'
})

export class PortfolioComponent{
    title: string = 'Portfolio';
    outputText: string = "";
}