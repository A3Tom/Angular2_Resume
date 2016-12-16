import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { RouterModule }  from '@angular/router';

import { AppComponent }  from './app.component';

//Pages in use
import { SplashComponent, IntroComponent, SkillsComponent, PortfolioComponent, AboutComponent, ContactComponent, SettingsComponent } from './components/shared/index';
import { LeftPanelComponent, NavbarComponent } from './components/shared/index';

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
        {
          path: '',
          component: SplashComponent
        },
        {
          path: 'intro',
          component: IntroComponent
        },
        {
          path: 'skills',
          component: SkillsComponent
        },
        {
          path: 'portfolio',
          component: PortfolioComponent
        },
        {
          path: 'about',
          component: AboutComponent
        },
        {
          path: 'contact',
          component: ContactComponent
        },
        {
          path: 'settings',
          component: SettingsComponent
        },
        {
          path: 'leftpanel',
          component: LeftPanelComponent
        },
        {
          path: 'navbar',
          component: NavbarComponent
        }
      ]) 
    ],
  declarations: [ AppComponent, SplashComponent, IntroComponent, SkillsComponent, PortfolioComponent, AboutComponent, ContactComponent, SettingsComponent, LeftPanelComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ HttpModule ]
})
export class AppModule { }
