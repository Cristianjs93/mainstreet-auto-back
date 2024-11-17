import { CustomerType } from '@prisma/client';

export interface CustomerReqDto {
  firstName: string;
  lastName: string;
  email: string;
  customerType: CustomerType;
  locationId: string;
}

export interface CustomerSMDto extends Omit<CustomerReqDto, 'email'> {}

export interface CustomerResDto {
  id: string;
  createdDate: string;
  updatedDate: string;
  companyId: string;
  locationIds: string[];
  customerType: CustomerType;
  firstName: string;
  lastName: string;
  companyName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  dotNumber: string;
  paymentTermId: string;
  publicId: string;
  note: string;
  marketingOptIn: boolean;
  preferredContactMethod: string;
  preferredLanguage: string;
  referralSourceId: string;
  taxExempt: boolean;
  gstExempt: boolean;
  hstExempt: boolean;
  pstExempt: boolean;
  discountPercent: number;
  laborRateId: string;
  laborMatrixId: string;
  pricingMatrixId: string;
  fleetId: string;
  lastTimeOrderWorked: string;
  statementCount: number;
  transactionCount: number;
  deferredServiceCount: number;
  appointmentCount: number;
  messageCount: number;
  website: string;
  normalizedFirstName: string;
  normalizedLastName: string;
  normalizedName: string;
  coalescedFirstNameOrCompanyName: string;
  vehicleCount: number;
  orderCount: number;
  finixIdentityId: string;
  labels: [];
  externalId: string;
  originLocationId: string;
  imported: boolean;
  deleted: boolean;
  deletedUserId: string;
  deletedDate: string;
  deletedReason: string;
  emails: CustomerEmail[];
  phoneNumbers: CustomerPhone[];
  customFields?: Record<string, any>;
}

export type CustomerEmail = {
  id: string;
  createdDate: string;
  updatedDate: string;
  locationId: string;
  companyId: string;
  email: string;
  subscribed: boolean;
  customerId: string;
};

export type CustomerPhone = {
  id: string;
  createdDate: string;
  updatedDate: string;
  locationId: string;
  companyId: string;
  customerId: string;
  number: string;
  extension: string;
  country: string;
  type: string;
  userDefinedType: string;
  carrierName: string;
  optInVerifiedDate: string;
  optIn: boolean;
  lastVerifiedDate: string;
  primary: boolean;
  mobileCountryCode: string;
  mobileNetworkCode: string;
};
