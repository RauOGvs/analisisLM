/* import React from 'react'
import  axios from 'axios'
import { thisExpression, throwStatement } from '@babel/types'
import { getDefaultWatermarks } from 'istanbul-lib-report'

class AllCases extends React.Component{
    constructor(args){
        super(args)
        
        this.state = {
            allCasesData: []
        }
        
    }

    componentDidMount(){
        $.ajax({
            url: 'http://private-d1fa74-raulorellana.apiary-mock.com/allCases',
            dataType: 'json',
            cache: false,
            success: function(response) {
              this.setState({allCasesData: response.data});
           }.bind(this),
           error: function(xhr, status, err) {
             console.log(err);
             }
           });
 }
    render(){
        const { allCasesData } = this.state
        return(
            
            allCasesData.map(allCasesData => 
                    
                                <label htmlFor="empresa">{allCasesData.empresa}</label>
                    
                     )
            );
    }
}

export default AllCases;
*/