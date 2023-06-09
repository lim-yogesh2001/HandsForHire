import './dropdown.css';
import {FormControl, Select, MenuItem,} from '@mui/material';

function DropDown({ dropdownValues }) {
    let sortOpt;
    const renderedItems = dropdownValues.map((x) => {
        return <MenuItem value={x} key={x}>{x}</MenuItem>
    })

    return (
        <div className='sort-dropdown'>
            <FormControl fullWidth>
                <Select id='sort' value={sortOpt}>
                    {renderedItems}
                </Select>
            </FormControl>
        </div>
    );
}

export default DropDown;