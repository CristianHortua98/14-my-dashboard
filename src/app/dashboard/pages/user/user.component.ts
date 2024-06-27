import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { User } from '../../../interfaces/req-response';
import { switchMap } from 'rxjs';
import { UsersService } from '@services/users.service';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title [title]="titleLabel()"></app-title>

    @if (user()){

      <section>
        <img [srcset]="user()!.avatar" [alt]="user()!.first_name">

        <div>
          <h3>{{ user()?.first_name }} {{ user()?.last_name }}</h3>
          <p>{{ user()?.email }}</p>
        </div>

      </section>

    }@else{

      <p>Cargando Informacion...</p>

    }

  `
})
export default class UserComponent {

  private usersService = inject(UsersService);
  private route = inject(ActivatedRoute);
  // public user = signal<User | undefined>(undefined);
  
  public user = toSignal(
    this.route.params.pipe(
      switchMap(({id}) => this.usersService.getUserById(id))
    )
  )
  
  public titleLabel = computed(() => {

    if(this.user()){

      return `Informacion del Usuario: ${this.user()?.first_name} ${this.user()?.last_name}`; 

    }
    
    return `Informacion del Usuario:`;

  })

  // constructor(){

  //   this.route.params.subscribe(params => {
  //     console.log(params);
  //   });

  // }

}
