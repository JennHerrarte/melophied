import './FanPageBio.css'

const FanPageBio = ({pageData}) => {
    return(
        <div className="FanPageBio">
            <p className="bio">{pageData.pageDetail}</p>
        </div>
    )
}

export default FanPageBio; 