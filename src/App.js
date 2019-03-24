import React, { PureComponent } from 'react';
import './App.css';
import Hotels from './data/hotels.json';

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      hotelResults : [],
      searchStr : 'autofills - backspace and press enter to clear',
    };


    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearch(event) {

    this.setState({ searchStr: event.target.value });
   // this.state.hotelResults = [];
	//this.setState({ ...this.state.hotelResults });

    //add locations to search results
    if( this.state.searchStr.length > 1){
      for(let i=0; i < Hotels.length; i++){
        for(let j=0; j< Hotels[i].facilities.length; j++){
          if( Hotels[i].facilities[j].toLowerCase().indexOf(this.state.searchStr.toLowerCase()) !== -1){   
            //check if room is already in the result
            if( !this.state.hotelResults.includes(Hotels[i].name))
              this.state.hotelResults.push(Hotels[i].name);
          }
        }
      }
    }

  }

  handleSubmit(event) {
    event.preventDefault();
	return this.setState({ hotelResults: [] });
  }
  
  render() {
    return (
      <div style={{ textAlign: "center", backgroundColor: "#00ff00" }}>
        
        <form onSubmit={this.handleSubmit}>
          Search Facilities :&nbsp;
          <input 
			type="text" 
			value={this.state.searchStr} 
			onChange={this.handleSearch} 
			autoFocus 
            size= "50"
		  />
        </form>

        <div style={{ 
			display: "inline-block", 
			width: 300,
			position: "absolute", 
			marginLeft: -100,
			paddingLeft: 2,
			backgroundColor: "#3b77d6"
			}}
		>
        {
          //based upon search result locations display the facilities at the hotel
		
            Hotels.map( (item, uniqueID) => {        
            for(let i=0; i < this.state.hotelResults.length; i++){
              if(this.state.hotelResults[i] === item.name ){
                return(
                  <ul><li key={item.id} style={{ textAlign: "center" }}><b>{item.name}</b><ul>
                  {
                    item.facilities.map( (subitem, index ) => <li key={index}>{subitem}</li> ) 
                  }
                  </ul></li></ul>
                );  
              }		  
            }
		 })
        }
        </div>

      </div>
    );
  }
}

export default App;
