import FanPageBio from '../../components/FanPageBio/FanPageBio'
import Albums from '../../components/Albums/Albums'
import Tracks from '../../components/Tracks/Tracks'
import UserShows from '../../components/UserShows/UserShows'
import Kevin from '../FanPage/testimages/Kevin.png' 
import './FanPage.css'

const FanPage = () => {
    return (
        <div className="FanPage">
              <img src={Kevin} className="Kevin" alt="Kevin"/>
            <h1>Tame Impala</h1>
            <FanPageBio/>
            <Tracks/>
            <Albums/>
            <UserShows/>
        </div>
    )
}

export default FanPage;