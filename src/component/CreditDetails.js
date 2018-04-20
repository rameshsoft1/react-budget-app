import React, { Component } from 'react';
class CreditDetails extends Component{

	removeCreditItem  = (index)=>{
		this.props.handleClick(index);
	}
	
	render(){
		
		const creditDetails =this.props.stateValue;
		const creditDetails_listItems = creditDetails.map(
		(item,index)=><tr key={index}><td>{item.creditName}</td><td>: {item.creditAmount}</td><td onClick={() => this.removeCreditItem(index)}>[x]</td></tr>);
			
		return(
		
				<div className="display-credit">
					<h3>Out goings List</h3>
					<table><tbody>{creditDetails_listItems}</tbody></table>
				</div>
		
		);
	}
}
export default CreditDetails; 