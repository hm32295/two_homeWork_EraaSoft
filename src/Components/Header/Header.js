import { Button } from "react-bootstrap"
import "./Header.css"
export default function Header(props) {
  return (
    <div id="Header">
    
        <Button variant="primary" onClick={()=>{props.sendData("iPhone 5",500)}}>iPhone 5</Button>
        <Button variant="secondary" onClick={()=>{props.sendData("iPhone 6",600)}}>iPhone 6</Button>
        <Button variant="success" onClick={()=>{props.sendData("iPhone x",700)}}>iPhone X</Button>
    </div>
  )
}
