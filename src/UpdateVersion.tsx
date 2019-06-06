import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { render } from 'react-dom';


const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
  }),
);

interface State {
  name: string;
  age: string;
  multiline: string;
  currency: string;
}

function UpdateVersion() {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  });

  const handleChange = (name: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return(
      <div>
        <TextField
                id="filled-number"
                label="Number"
                value={values.age}
                onChange={handleChange('age')}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
                margin="normal"
                variant="filled"
            />
            <TextField
                id="filled-number"
                label="Number"
                value={values.age}
                onChange={handleChange('age')}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
                margin="normal"
                variant="filled"
            />
            <TextField
                id="filled-number"
                label="Number"
                value={values.age}
                onChange={handleChange('age')}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
                margin="normal"
                variant="filled"
            />
            <TextField
                id="filled-number"
                label="Number"
                value={values.age}
                onChange={handleChange('age')}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
                margin="normal"
                variant="filled"
            />
            <TextField
                id="filled-number"
                label="Number"
                value={values.age}
                onChange={handleChange('age')}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
                margin="normal"
                variant="filled"
            />
        </div>
  )

}

export default UpdateVersion;