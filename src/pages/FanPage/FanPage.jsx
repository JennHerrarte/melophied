import FanPageBio from '../../components/FanPageBio/FanPageBio'
import Albums from '../../components/Albums/Albums'
import Tracks from '../../components/Tracks/Tracks'
import UserShows from '../../components/Tracks/UserShows'

const FanPage = () => {
    return (
        <div className="FanPage">
            <h1>FanPage</h1>
            <FanPageBio/>
            <Tracks/>
            <Albums/>
            <UserShows/>
        </div>
    )
}

export default FanPage;