import Button from 'react-bootstrap/Button'

const AuthorButtons = ({userId, pageData}) => {
    return(
        <>
            {
                userId === pageData.author ?
                <Button variant="outline-warning">Edit</Button>
                :
                ''
            }
        </>
    )
}

export default AuthorButtons