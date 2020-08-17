import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-topbanner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './topbanner.component.html',
  styleUrls: ['./topbanner.component.scss'],
})
export class TopbannerComponent {
  @Input() sideNav: any;
}
