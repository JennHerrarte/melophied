import Button from 'react-bootstrap/Button'

const AuthorButtons = ({userId, pageData}) => {
    return(
        <>
            {
                userId === pageData.author ?
                <div className="AuthorButtons">
                    <Button variant="outline-warning">Edit</Button>
                    <Button variant="outline-danger">Delete</Button>
                </div>
                :
                ''
            }
        </>
    )
}

export default AuthorButtons