import React, { Component } from 'react';
import './App.css';
import DebitDetails from './DebitDetails';
import CreditDetails from './CreditDetails';
import CalculateRemain from './CalculateRemain';


class App extends Component {
	constructor(props){
		super(props);
		 this.state = {
		  descName : "",
		  amount : "",
		  debitDetails: [],
		  creditDetails: [],
		};
		
		this.handleDescription = this.handleDescription.bind(this);
		this.handleAmount = this.handleAmount.bind(this);
		this.handleIncome = this.handleIncome.bind(this);
		this.handleOutgoing = this.handleOutgoing.bind(this);
	}
	 
	 
	handleDescription(event) {
		this.setState({descName: event.target.value});
	}
	 handleAmount(event) {
		this.setState({amount: event.target.value});
	}
	 
	handleIncome(event) {
		console.log(this.state.descName);
		const debitDetails = this.state.debitDetails.slice();
		
		
		if((this.state.descName)!== ""){
			this.setState(
			{
				debitDetails : debitDetails.concat([{debitName:this.state.descName,debitAmount:this.state.amount}]),
			
			});
		}
  }	 
	handleOutgoing(event) {
		const creditDetails = this.state.creditDetails.slice();

		if((this.state.descName)!== ""){
			this.setState(
			{
				creditDetails : creditDetails.concat([{creditName:this.state.descName,creditAmount:this.state.amount}]),
			});
		}
  }

   removeDebitItem =(index)=>{
	   
	   //Here remove
	  // const history = this.state.debitDetails.slice(0, this.state.debitDetails.length-1);
	  // const current = history[history.length - 1];
	
	  this.state.debitDetails.splice(index, 1);
		
	   this.setState({
			
		   //debitDetails:debitDetails.remove(index);
	   });
   } 
   
   removeCreditItem =(index)=>{
	   
	   //Here remove
	  // const history = this.state.debitDetails.slice(0, this.state.debitDetails.length-1);
	  // const current = history[history.length - 1];
	
	  this.state.creditDetails.splice(index, 1);
		
	   this.setState({
			
		   //debitDetails:debitDetails.remove(index);
	   });
   }
  
  render() {
    return (
      <div className="App">
			<div className="enter-details">
					<div>
						<div><h3>Budget App</h3></div>
						<input type="text" placeholder="Enter income/outgoing cost" value={this.state.descName} onChange={this.handleDescription}/>
						<input type="number" placeholder="Enter amount" value={this.state.amount} onChange={this.handleAmount}/>
					</div>
					<div>
						<input type="button" value="Add Income" onClick={this.handleIncome}/>
						<input type="button" value="Add Spends" onClick={this.handleOutgoing}/>
					</div>
			</div>
			
			<div className="display-details">
				<DebitDetails stateValue={this.state.debitDetails} handleClick={this.removeDebitItem}/>
				<CreditDetails stateValue={this.state.creditDetails} handleClick={this.removeCreditItem}/>
				<CalculateRemain stateValue={this.state}/>
			</div>
      </div>
    );
  }
}

export default App; 
