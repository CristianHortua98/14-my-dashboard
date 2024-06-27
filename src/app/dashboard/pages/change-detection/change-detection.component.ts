import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `

    <app-title [title]="currentFrameowrk()"></app-title>

    <pre>{{ frameworksAsSignal() | json }}</pre>
    <pre>{{ frameworksAsProperti | json}}</pre>

  `
})
export default class ChangeDetectionComponent {

  public currentFrameowrk = computed(
    () => `Change Detection - ${this.frameworksAsSignal().name}`
  );

  public frameworksAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  })

  public frameworksAsProperti = {
    name: 'Angular',
    releaseDate: 2016,
  }

  constructor(){

    setTimeout( () => {

      // this.frameworksAsProperti.name = 'React';
      this.frameworksAsSignal.update( value => ({
        ...value,
        name: 'React'
      }))

      console.log('Hecho');
    }, 3000)

  }

}
