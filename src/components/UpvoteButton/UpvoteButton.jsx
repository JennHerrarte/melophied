import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const UpvoteButton = ({userId, pageData}) => {
    return (
        <>
            {
                // show upvote button if user logged in, show login button if user not logged in
                userId ?
                <Button variant="outline-warning">Upvote</Button>
                :
                <Link to="/login">
                    <Button variant="outline-warning">Upvote</Button>
                </Link>

            }
        </>
    )
}

export default UpvoteButton