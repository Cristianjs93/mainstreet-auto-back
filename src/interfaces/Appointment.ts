import { AppointmentColor } from './common/appointmentColor.enum';

export interface AppointmentReqDto {
  name: string;
  startDate: string;
  endDate: string;
  color: AppointmentColor;
  locationId: string;
  customerId: string;
}

export interface AppointmentResDto {
  name: string;
  startDate: string;
  endDate: string;
  rruleset: string;
  customerId: string;
  note: string;
  vehicleId: string;
  orderId: string;
  color: AppointmentColor;
  useEmail: boolean;
  useSMS: boolean;
  sendConfirmation: boolean;
  sendReminder: boolean;
  cancelationNote: string;
  pendingConfirmation: boolean;
  confirmed: boolean;
  allDay: boolean;
  removedFromRecurrency: boolean;
  customerEmailId: string;
  customerPhoneNumberId: string;
  locationId: string;
}
