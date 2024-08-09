import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SimpleFormComponent } from './components/reactive/simple-form/simple-form.component';
import { ComponentNameComponent } from './component-name/component-name.component';
import { GroupFormControlComponent } from './components/reactive/group-form-control/group-form-control.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SimpleFormComponent, ComponentNameComponent, GroupFormControlComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'git-practice';
}
