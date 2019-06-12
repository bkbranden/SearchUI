import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function Active() {
  const [value, setValue] = React.useState('female');

  function handleChange(event: React.ChangeEvent<unknown>) {
    setValue((event.target as HTMLInputElement).value);
  }

  return (
      <div>
        <FormControl style={{marginRight: '100px'}} component="fieldset">
        <FormLabel component="legend">Active:</FormLabel>
            <RadioGroup style={{flexDirection: 'column', justifyContent: 'flex-start'}} aria-label="position" name="position" value={value} onChange={handleChange} row>
                <FormControlLabel
                    value="yes"
                    control={<Radio color="primary" />}
                    label="Yes"
                    labelPlacement="start"
                />
                <FormControlLabel
                    value="no"
                    control={<Radio color="primary" />}
                    label="No"
                    labelPlacement="start"
                />
                <FormControlLabel
                    value="x"
                    control={<Radio color="primary" />}
                    label="Don't care"
                    labelPlacement="start"
                />
            </RadioGroup>
        </FormControl>
    </div>
  );

}

export default Active;