import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: '.app-test',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.sass',
})
export class TestComponent {
  search = 'yo';
  public myId = 'niceID';
  public name = 'yoo';
}
