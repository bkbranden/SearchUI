import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import UpdateVersion from './UpdateVersion';
import HHID from './HHID';
import UserTypeSelect from './UserTypeSelect';
import Active from './Active';
import Version from './Version';
import Button from '@material-ui/core/Button';

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
    button: {
        margin: theme.spacing(1),
    },
    color: {
        backgroundColor: "#afafaf",
    },
    inside: {
        backgroundColor: "#f8f8fa",
    }
  }),
);

interface State {
  name: string;
  age: string;
  multiline: string;
  currency: string;
}

function SearchMaterial() {
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

  return (
      <Container fixed className={classes.color}>
        <div className={classes.inside}>
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="filled-search"
                    label="Subject"
                    type="search"
                    className={classes.textField}
                    fullWidth
                    margin="normal"
                    variant="filled"
                />
                <TextField
                    id="filled-search"
                    label="File"
                    type="search"
                    className={classes.textField}
                    fullWidth
                    margin="normal"
                    variant="filled"
                />
                <UpdateVersion />
                <HHID />
                <UserTypeSelect />
                <Active />
                <Version />

                <Button variant="outlined" className={classes.button}>
                    Search Updates
                </Button>
            </form>
        </div>
      </Container>
  );
}

export default SearchMaterial;