import UpvoteButton from '../UpvoteButton/UpvoteButton'
import AuthorButtons from '../AuthorButtons/AuthorButtons'
import FanPageBanner from '../../components/FanPageBanner/FanPageBanner'
import './FanPageHeader.css'

const FanPageHeader = ({currentUser, userId, pageData, deletePage, upvotePage }) => {

    return (
        <>
            <div className="FanPageHeader">
                <div className="FanPageHeader__buttons d-flex justify-content-between">
                    <UpvoteButton currentUser={currentUser} userId={userId} pageData={pageData} upvotePage={upvotePage} />
                    <AuthorButtons currentUser={currentUser} userId={userId} pageData={pageData} deletePage={deletePage} />
                </div>
                <FanPageBanner pageData={pageData} />
            </div>
        </>
    )

}

export default FanPageHeader