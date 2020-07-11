import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { User } from 'src/shared/models/user.model';

@Component({
  selector: 'user-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent{
  @Input() users: User[];
  
  @Output() edit = new EventEmitter<string>();

  onEdit(id){
    this.edit.emit(id);
  }
}
