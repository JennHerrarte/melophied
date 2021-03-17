import FanPageBio from '../../components/FanPageBio/FanPageBio'
import Albums from '../../components/Albums/Albums'
import Tracks from '../../components/Tracks/Tracks'
import UserShows from '../../components/UserShows/UserShows'
import Kevin from '../FanPage/testimages/Kevin.png' 
import './FanPage.css'

const FanPage = () => {
    return (
        <div className="FanPage">
              <img src={Kevin} className="Kevin" fluid alt="Kevin"/>
            <h1 className='artistTitle'>Tame Impala</h1>
            <FanPageBio/>
            <div className="FanPageBody">
                <Tracks/>
                <Albums/>
                <UserShows/>
            </div>
        </div>
    )
}

export default FanPage;