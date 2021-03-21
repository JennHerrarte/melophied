import'./UpVoteButton.css'
import {Button} from 'react-bootstrap'
import Arrow from './Images/arrow.jpeg'

const UpVoteButton = () => {


        return (

            <Button variant="light"><img className='arrow' src={Arrow} /></Button> 
        )
    
}

export default UpVoteButton


