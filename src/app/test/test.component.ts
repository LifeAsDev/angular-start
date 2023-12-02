import { Component, Input, EventEmitter, Output } from '@angular/core';
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
  @Input() name = '';

  search = 'yo';

  @Output()
  searchChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchChanged() {
    this.searchChanged.emit(this.search);
  }
  public myId = 'niceID';
}
