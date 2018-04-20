import React, { Component } from 'react';

class CalculateRemain extends Component{

	render(){
		
		const obj = this.props.stateValue;
		let debitAmtTotal=0;
		let creditAmtTotal=0;
		let i;
		let temp1;
		let temp2;
		
		for(i=0;i<obj.debitDetails.length;i++){
			console.log(typeof(obj.debitDetails[i].debitAmount));
			if(obj.debitDetails[i].debitAmount !== undefined){
				 temp1 = parseInt(obj.debitDetails[i].debitAmount);
				debitAmtTotal += temp1;
			}
			
		}
		
		for(i=0;i<obj.creditDetails.length;i++){
			if(obj.creditDetails[i].creditAmount !== undefined){
				 temp2 = parseInt(obj.creditDetails[i].creditAmount);
				creditAmtTotal += temp2;
			}
		}
		return(
			<div className="calculate-block">
				<h3>Remain amount : {debitAmtTotal-creditAmtTotal}</h3>
			</div>
		);
	}
}
export default CalculateRemain; 