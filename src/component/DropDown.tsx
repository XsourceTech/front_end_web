import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';

type DropDownList = {
    id: number;
    value: string;
    text: string;
}

export default function DropDown({
    label,
    items,
    helper_text,
    width,
    onChange
}: {
    label: string;
    items: DropDownList[];
    helper_text: string;
    width: string;
    onChange: (value: string) => void;
}) {
  const [val, setVal] = useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setVal(event.target.value);
    onChange(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" style={{margin: 0}}>
      <InputLabel id="demo-select-small-label">{label}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={val}
        label={label}
        onChange={handleChange}
        style={{width: width}}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {
            items.map((item) => (
                <MenuItem key={item.id} value={item.value}>{item.text}</MenuItem>
            ))
        }
      </Select>
      <FormHelperText>{helper_text}</FormHelperText>
    </FormControl>
  );
}
