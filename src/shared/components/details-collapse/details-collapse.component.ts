import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'details-collapse',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './details-collapse.component.html',
  styleUrls: ['./details-collapse.component.scss'],
})
export class DetailsCollapseComponent {
  @Input() item: Item;

  show = false;
}

interface Item {
  title: string;
  image: string;
  text: string;
  points: string[];
}
