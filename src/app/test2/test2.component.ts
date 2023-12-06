import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test2.component.html',
  styleUrl: './test2.component.sass',
})
export class Test2Component {
  @Input()
  style = '';
}
