import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgbNavModule, NgbToastModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from '../home/home.component';
import { AllPostsComponent } from '../all-posts/all-posts.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    RouterModule,
    NgbNavModule,
    NgbToastModule,
    NgbTooltipModule,
    // HomeComponent,
    // AllPostsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})

export class AppComponent { }
