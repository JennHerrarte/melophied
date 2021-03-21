import Button from 'react-bootstrap/Button'

const FanPageButtons = ({userId, pageData}) => {

    return (
        <div className="FanPageButtons d-flex justify-content-between">
            {
                // show upvote button if user logged in, show login button if user not logged in
                userId ?
                <Button variant="outline-warning">Upvote</Button>
                :
                <Button variant="outline-warning">Login</Button>

            }
            <Button variant="outline-warning">Edit</Button>
        </div>
    )

}

export default FanPageButtons