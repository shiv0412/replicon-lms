export interface IUserDetails {
  userName: string;
  userID: number;
  supervisor: string;
  supervisorID: number;
}

export interface IUserCurrentTimesheetDetails extends IUserDetails {
  timesheetStartDate: Date;
  timesheetEndDate: Date;
  timesheetDueDate: Date;
  billableHours: number;
  timesheetStatus: string;
}
