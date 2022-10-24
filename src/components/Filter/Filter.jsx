import PropTypes from 'prop-types';
import { Input, Label } from './Filter.styled';

export function Filter({ onChange }) {
    return (
        <Label>
            Find contact by the name
            <Input type="text" name="filter" onChange={onChange} />
        </Label>
    );
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
};
