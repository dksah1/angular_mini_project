import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule,MatButtonModule,MatToolbarModule,RouterLink],
  template:`
  <mat-toolbar color="primary" routerLink="/">
    <button mat-icon-button >
      <mat-icon>home</mat-icon>
    </button>
    <span>My Product management app</span>
  </mat-toolbar>
    `,
  styles:``
})
export class HeaderComponent {

}
