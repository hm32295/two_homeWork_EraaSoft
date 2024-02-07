import { Table } from "react-bootstrap";

import "./Fatora.css"

export default function Fatora(props) {
   
  return (
    <div>
    <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>price</th>
            <th>qnt</th>
            <th>total</th>
            
          </tr>
        </thead>
        <tbody>
        {
            props.data.map((ele ,key)=>{
                return(
                    <tr data={ele.type}>
                        <td>{key+1}</td>
                        <td>{ele.type}</td>
                        <td>{ele.price}</td>
                        <td> <span onClick={(e)=>{
                                        props.decri(e.target.parentElement.parentElement.getAttribute("data"))
                                    }}>
                            - 
                            </span> 
                            {ele.qnt} 
                            <span onClick={(e)=>{
                                        props.incri(e.target.parentElement.parentElement.getAttribute("data"))
                                    }}>+
                            </span> </td>
                        <td>{ele.price*1}</td>
                    </tr>
                )

            })
        }

            
        </tbody>
      </Table>
    
    
    </div>
  )
}
