import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Axios from 'axios';
import Preview from './components/preview.jsx';
import InfoBody from './components/infoBody.jsx';
import {getYoutubeVideos} from './infoHelpers.js';


class Payment extends React.Component { 
	constructor (props) {
	  super(props);
	}

	componentDidMount () {
    //get course data from database set state
    var context = this;
    var id = window.location.search || '?id=75'; 
	  Axios.get('/courses' + id)
    .then(function (response){
      context.setState({courseToPurchase: response.data[0]})  
    })
    .catch(function(err){
      console.error(err) 
    })
    //get preview videos for preview component
    getYoutubeVideos('hackreactor bootcamp',(data)=> {
      this.setState({previewVideo:data[1], courseToPurchase:this.state.courseToPurchase})  
    })    	
	}

  render () {
    if(!this.state) {
      return (<div>Loading...</div>)  
    } else {
      return (
      	<div className="payment-main">
      	  <Preview 
            thumbnail= {this.state}
          />
      	  <InfoBody 
            course= {this.state}
          />
      	</div>
      );
    }
  }
}

ReactDOM.render(<Payment />, document.getElementById('payment'))
