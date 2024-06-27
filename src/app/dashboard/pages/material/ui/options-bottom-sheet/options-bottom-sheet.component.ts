import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-options-bottom-sheet',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './options-bottom-sheet.component.html'
})
export class OptionsBottomSheetComponent {

}
