import {Component, Input} from '@angular/core';
import {Source} from "../../model/source.entity";

@Component({
  selector: 'app-source-list-item',
  templateUrl: './source-list-item.component.html',
  styleUrl: './source-list-item.component.css'
})
export class SourceListItemComponent {
  @Input() source: Source = {} as Source;
}
