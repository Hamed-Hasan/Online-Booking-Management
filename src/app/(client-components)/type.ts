export interface GuestsObject {
  guestAdults?: number;
  guestChildren?: number;
  guestInfants?: number;
}

export type StaySearchFormFields = "location" | "guests" | "dates";

export interface PropertyType {
  name: string;
  description: string;
  checked: boolean;
}

export interface ClassOfProperties extends PropertyType {}

export type DateRage = [Date | null, Date | null];
