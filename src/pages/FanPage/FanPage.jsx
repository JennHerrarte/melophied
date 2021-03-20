import FanPageBio from '../../components/FanPageBio/FanPageBio'
import Albums from '../../components/Albums/Albums'
import UserTracks from '../../components/UserTracks/UserTracks'
import UserShows from '../../components/UserShows/UserShows'
import Kevin from '../FanPage/testimages/Kevin.png' 
import ArtistTopTracksContainer from '../../components/ArtistTopTracksContainer/ArtistTopTracksContainer'

import './FanPage.css'

const FanPage = () => {
    return (
        <div className="FanPage">
              <img src={Kevin} className="Kevin" fluid alt="Kevin"/>
            <h1 className='artistTitle'>Tame Impala</h1>
            <FanPageBio/>
            <ArtistTopTracksContainer/>
            <div className="FanPageBody">
                <UserTracks/>
                <Albums/>
                <UserShows/>
            </div>
        </div>
    )
}

export default FanPage;