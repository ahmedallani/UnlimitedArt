import React from 'react';
import Carousel from "./carousel.jsx"
import List from "./offerlist.jsx"

class Offers extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }
render() {
        return <div>
     <Carousel/>
     <List/>
        </div>
  }
}
export default Offers
