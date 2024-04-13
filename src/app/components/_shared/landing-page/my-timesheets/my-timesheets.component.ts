import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IUserCurrentTimesheetDetails } from '../../../../modals/modals';
import { FormatDatePipe } from '../../../../pipes/format-date.pipe';

@Component({
  selector: 'app-my-timesheets',
  standalone: true,
  imports: [CommonModule, FormatDatePipe],
  templateUrl: './my-timesheets.component.html',
  styleUrl: './my-timesheets.component.css',
})
export class MyTimesheetsComponent {
  @Input() isLoadingTimesheet!: boolean;
  @Input() userCurrentTimesheetDetails!: IUserCurrentTimesheetDetails;
}
