import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '.app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.sass',
})
export class TestComponent {
  public myId = 'niceID';
  public name = 'yoo';
}
