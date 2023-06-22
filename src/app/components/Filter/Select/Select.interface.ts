import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

export interface SelectProps<FilterValue, T extends string> {
  label: string;
  filterValue: FilterValue;
  setter: ActionCreatorWithPayload<FilterValue, T>;
  placeholder: string;
  list: FilterValue[];
}
