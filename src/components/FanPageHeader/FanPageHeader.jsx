import Button from 'react-bootstrap/Button'
import UpvoteButton from '../UpvoteButton/UpvoteButton'

const FanPageHeader = ({userId, pageData}) => {

    return (
        <div className="FanPageHeader d-flex justify-content-between">
            <UpvoteButton userId={userId} pageData={pageData} />
            {
                userId === pageData.author ?
                <Button variant="outline-warning">Edit</Button>
                :
                ''
            }
            
        </div>
    )

}

export default FanPageHeader