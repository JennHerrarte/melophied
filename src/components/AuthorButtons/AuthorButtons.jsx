import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const AuthorButtons = ({currentUser, userId, pageData, deletePage}) => {
    return(
        <>
            {
                userId === pageData.author ?
                <div className="AuthorButtons">
                    <Link to={`/fanpage/${pageData._id}/edit`}>
                        <Button>Edit</Button>
                    </Link>
                    <Button onClick={() => deletePage(pageData._id, currentUser)}>Delete</Button>
                </div>
                :
                ''
            }
        </>
    )
}

export default AuthorButtons