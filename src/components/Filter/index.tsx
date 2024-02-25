import { useCallback } from "react";
import {
  FormControlLabel,
  MenuItem,
  SelectChangeEvent,
  Switch,
  TextField,
} from "@mui/material";
import { FilterProps } from "./types";
import { FilterContainer } from "./style";
import { SELECT_VALUES } from "./contants";

const Filters: React.FC<FilterProps> = ({ setFilter, filter }) => {
  const handleOnChangeText = useCallback(
    (
      event:
        | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        | SelectChangeEvent<string>
    ) => {
      setFilter((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    },
    [setFilter]
  );

  const handleOnChangeSwitch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      setFilter((prev) => ({ ...prev, [event.target.name]: checked }));
    },
    [setFilter]
  );
  return (
    <FilterContainer>
      <TextField
        value={filter.stage}
        onChange={handleOnChangeText}
        select
        name="stage"
        size="small"
        sx={{ width: 160, maxWidth: 160 }}
        label="Stage"
      >
        {SELECT_VALUES.map(({ value, label }) => (
          <MenuItem key={value || label} value={value}>
            {label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        name="searchText"
        size="small"
        placeholder="Search..."
        value={filter.searchText}
        onChange={handleOnChangeText}
      />
      <FormControlLabel
        control={
          <Switch
            checked={filter.assignable}
            size="small"
            name="assignable"
            onChange={handleOnChangeSwitch}
          />
        }
        label="Is assignable"
        componentsProps={{ typography: { fontSize: "0.75rem" } }}
      />
    </FilterContainer>
  );
};
export { Filters };
