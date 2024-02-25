import { Filter } from "src/components/Hubs/types";

export interface FilterProps {
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
  filter: Filter;
}
