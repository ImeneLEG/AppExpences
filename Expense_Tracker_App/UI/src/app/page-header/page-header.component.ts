import { Component, EventEmitter, Output } from '@angular/core';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'page-header',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './page-header.component.html',
 
  
})
export class PageHeaderComponent {
  @Output()
  onMenuClicked = new EventEmitter();
}
