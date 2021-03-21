import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const AuthorButtons = ({userId, pageData}) => {
    return(
        <>
            {
                userId === pageData.author ?
                <div className="AuthorButtons">
                    <Link to={`/fanpage/${pageData._id}/edit`}>
                        <Button 
                        variant="outline-warning">Edit</Button>
                    </Link>
                    <Button variant="outline-danger">Delete</Button>
                </div>
                :
                ''
            }
        </>
    )
}

export default AuthorButtons