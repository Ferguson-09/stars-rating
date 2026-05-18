import {FaStar} from "react-icons/fa"

function Star(props) {
    return (
        <FaStar className={props.selected? 'yellow' : 'grey'} onClick={props.handler}></FaStar>
    )
}

export default Star;