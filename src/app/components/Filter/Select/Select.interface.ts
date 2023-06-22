import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

export interface SelectProps<P, T extends string> {
  label: string;
  value: string;
  setter: ActionCreatorWithPayload<P, T>;
  placeholder: string;
  list: string[];
}
