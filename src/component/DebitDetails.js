import React, { Component } from 'react';


class DebitDetails extends Component{
	
	removeDebitItem  = (index)=>{
		this.props.handleClick(index);
	}
	render(){
		
		const debitDetails =this.props.stateValue;
		const debitDetails_listItems = debitDetails.map(
		(item,index)=><tr key={index}><td>{item.debitName}</td><td>: {item.debitAmount}</td><td onClick={() => this.removeDebitItem(index)}>[x]</td></tr>);

		return(
			
				<div className="display-debit">
					<h3>Incoming List</h3>
					
					<table><tbody>{debitDetails_listItems}</tbody></table>
				</div>
	
		);
	}
}

export default DebitDetails; 