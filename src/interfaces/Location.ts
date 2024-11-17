export interface Location {
  id: string;
  createdDate: string;
  companyId: string;
  name: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  latitude: number;
  longitude: number;
  externalId: string;
  companyName: string;
  inMultiLocationCompany: boolean;
  finixIntegration: {
    error: string;
    identityId: string;
    merchantId: string;
  };
  stripeIntegration: {
    accountId: string;
    billingCustomerId: string;
    error: string;
  };
}
