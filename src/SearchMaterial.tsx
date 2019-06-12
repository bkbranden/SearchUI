import React from 'react';

import { Theme, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { WithStyles } from '@material-ui/core/styles/withStyles';
import { withStyles } from "@material-ui/core/styles";

import UpdateVersion from './UpdateVersion';
import HHID from './HHID';
import UserTypeSelect from './UserTypeSelect';
import Active from './Active';
import PaperSheet from './PaperSheet';


import testdata from './data/data.json';
import './search.css';


const styles = (theme: Theme) => createStyles({
    container: {
      display: 'flex',
      justifyContent: 'flex-start',
      width: '45%',
      flexWrap: 'wrap',
      paddingBottom: '50px',
      borderBottom: '1px solid #d8d8d8',
     },
     textField: {
       marginLeft: theme.spacing(3),
       marginRight: theme.spacing(3),
     },
     dense: {
       marginTop: 16,
     },
     menu: {
       width: 200,
     },
});


interface Props extends WithStyles<typeof styles>{

}

interface JsonDataForm{
  [key: string]: any;
}
  

interface State {
  subject: string,
  file: string,
  // data: any,
  filtered: string[],
}

class SearchMaterial extends React.Component<Props, State>{
  constructor(props: Props){
    super(props);
    this.state = {
      subject: '',
      file: '',
      // data: {
      //   subject: "",
      //   file: "",
      //   // number: 0,
      //   // hhid: null,
      //   // usertype: "",
      //   // active: "",
      // },
      filtered: [],
    }
  }

  handleInput(name: string, e: any){
    let value = e.target.value;
    this.setState({
      [name]: value
    } as any);
    // let currentList = [];
    // let newList: any = [];

    // let name = e.target.name;
    // let value = e.target.value;

    // if(e.target.name === "subject"){
    //   if(e.target.value !== ""){
    //     currentList = testdata;
    //     newList = currentList.filter(item => {
    //         const lc = item['fields']['Subject'].toLowerCase();
    //         const filter = e.target.value.toLowerCase();

    //         return lc.includes(filter);
    //     })
    //   }
    //   else {
    //       newList = testdata;
    //   }
    // }

    // this.state.data[name] = value;
    
    // this.setState({
    //     filtered: newList,
    // })
    console.log(this.state)
  }

  handleSubmit(e: any){
    let data = {
      subject: this.state.subject,
      file: this.state.file,
    }
    e.preventDefault();
    console.log(data)
    // var jsondata = new FormData();
    // const payload = {
    //   subject: self.refs.subject.getValue()
    // }
    // console.log(this.state.data)
  }

  render(){
    const { classes } =  this.props;
    return (
      <div>
        <div className="form-container"> 
            <form className={classes.container} noValidate autoComplete="off" onSubmit={(e)=> this.handleSubmit(e)}>
                    <TextField
                        name="subject"
                        id="filled-search"
                        label="Subject"
                        type="search"
                        className={classes.textField}
                        fullWidth
                        margin="normal"
                        onChange={(e) => this.handleInput('subject', e)}
                    />
                    <TextField
                        name="file"
                        id="filled-search"
                        label="File"
                        type="search"
                        className={classes.textField}
                        fullWidth
                        margin="normal"
                        onChange={(e) => this.handleInput('file', e)}
                    />
                    <UpdateVersion />
                    <div className='hhid-user-row'>
                      <HHID />
                      <Active />
                    </div>
                    <div style={{width: '100%'}}>
                      <UserTypeSelect />
                    </div>
                    <Button className={classes.textField} type="submit" variant="outlined">
                      Search Updates
                    </Button>  
                </form>
                
          
        </div>
        <div className='search-button'>
          <div className='search-button-container'>
                  
          </div>
        </div>
        {/* {this.state.filtered.map((item, index) => {
            return <PaperSheet key={index} paper={item} />
          })} */}
      </div>

    );
  }
 
}

export default withStyles(styles)(SearchMaterial);