import Button from 'react-bootstrap/Button'

const FanPageButtons = ({pageData}) => {

    return (
        <div className="FanPageButtons d-flex justify-content-between">
            <Button variant="outline-warning">Upvote</Button>
            <Button variant="outline-warning">Edit</Button>
        </div>
    )

}

export default FanPageButtons