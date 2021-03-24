import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const UpvoteButton = ({currentUser, userId, pageData, upvotePage}) => {
    return (
        <>
            {
                // show upvote button if user logged in, show login button if user not logged in
                userId ?
                <>
                    {
                        pageData.upvote.includes(userId) ?
                        <Button variant="outline-danger" onClick={() => {upvotePage(pageData._id, currentUser )}}>Devote {pageData.upvote.length}</Button>
                        :
                        <Button variant="outline-warning" onClick={() => {upvotePage(pageData._id, currentUser )}}>Upvote {pageData.upvote.length}</Button>
                    }
                </>
                :
                <Link to="/login">
                    <Button variant="outline-warning">Upvote {pageData.upvote.length}</Button>
                </Link>

            }
        </>
    )
}

export default UpvoteButton