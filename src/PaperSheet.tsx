import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2),
    },
  }),
);

export default function PaperSheet(props: any) {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
            Subject: {props.paper['fields']['Subject']}
        </Typography>
        <Typography component="p">
            Content: {props.paper['fields']['File']}
        </Typography>
      </Paper>
    </div>
  );
}