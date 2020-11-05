import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


class Ageinout extends React.Component {
    constructor(props){
        super(props)
        this.state={
            age:null
        }
    }
render() {
        return <div>
      <TextField label="Age" id="standard-size-small" defaultValue="Small" size="small" type="number" min="18" max="100" onChange={(e)=>{
          this.props.age(e.target.value*1)
              this.setState({age:e.target.value})
     }}/>
        </div>
  }
}
export default Ageinout