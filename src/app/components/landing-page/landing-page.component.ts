import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTimesheetsComponent } from '../_shared/landing-page/my-timesheets/my-timesheets.component';
import { MyTimeOffsComponent } from '../_shared/landing-page/my-time-offs/my-time-offs.component';
import { MyScheduleComponent } from '../_shared/landing-page/my-schedule/my-schedule.component';
import { MyApprovalsComponent } from '../_shared/landing-page/my-approvals/my-approvals.component';
import { LandingPageService } from '../../services/landing-page/landing-page.service';
import {
  IUserCurrentTimesheetDetails,
  IUserDetails,
} from '../../modals/modals';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    MyTimesheetsComponent,
    MyTimeOffsComponent,
    MyScheduleComponent,
    MyApprovalsComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  isLoadingUserDetails: boolean = true;
  isLoadingTimesheet: boolean = true;
  userDetails!: IUserDetails;
  userCurrentTimesheetDetails!: IUserCurrentTimesheetDetails;

  constructor(private userDetailsService: LandingPageService) {}

  ngOnInit() {
    this.isLoadingUserDetails = true;
    this.isLoadingTimesheet = true;
    this.userDetailsService.getUserDetails().then((userDetails) => {
      this.userDetails = userDetails;
      this.isLoadingUserDetails = false;
      this.userDetailsService
        .getCurrentTimesheetDetails(this.userDetails.userID)
        .then((userCurrentTimesheetDetails) => {
          this.userCurrentTimesheetDetails = userCurrentTimesheetDetails;
          this.isLoadingTimesheet = false;
        });
    });
  }
}
