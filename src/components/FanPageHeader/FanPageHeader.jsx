import UpvoteButton from '../UpvoteButton/UpvoteButton'
import AuthorButtons from '../AuthorButtons/AuthorButtons'

const FanPageHeader = ({userId, pageData}) => {

    return (
        <div className="FanPageHeader d-flex justify-content-between">
            <UpvoteButton userId={userId} pageData={pageData} />
            <AuthorButtons userId={userId} pageData={pageData} />
        </div>
    )

}

export default FanPageHeader