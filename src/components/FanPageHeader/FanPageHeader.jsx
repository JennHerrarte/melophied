import UpvoteButton from '../UpvoteButton/UpvoteButton'
import AuthorButtons from '../AuthorButtons/AuthorButtons'
import FanPageBanner from '../../components/FanPageBanner/FanPageBanner'
import './FanPageHeader.css'

const FanPageHeader = ({userId, pageData}) => {

    return (
        <>
            <div className="FanPageHeader">
                <div className="FanPageHeader__buttons d-flex justify-content-between">
                    <UpvoteButton userId={userId} pageData={pageData} />
                    <AuthorButtons userId={userId} pageData={pageData} />
                </div>
                <FanPageBanner pageData={pageData} />
            </div>
        </>
    )

}

export default FanPageHeader