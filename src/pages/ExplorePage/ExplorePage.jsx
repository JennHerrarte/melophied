import FanPageCardsContainer from '../../components/FanPageCardsContainer/FanPageCardsContainer'
import FanPageListings from '../../components/FanPageListings/FanPageListings'
import FanPageAPI from '../../Models/FanPageAPI'
import {useState, useEffect} from 'react'

const ExplorePage = () => {

    const [allFanPages, setAllFanPages]=useState([])
    const [topFiveFanPages, setTopFiveFanPages]=useState([])

    useEffect(() => {
        
        fetchAllFanPages()
        fetchTopFiveFanPages()

    }, [])

    const fetchAllFanPages = async () => {

        const res = await FanPageAPI.all()
        
        setAllFanPages(res.data.allPages)
    }

    const fetchTopFiveFanPages = async () => {
        const res = await FanPageAPI.topFive()
        console.log(res.data.topFivePages.artistData)

        setTopFiveFanPages(res.data.topFivePages)
    }

    return(
        <div className>
            <p>I am the explore page so please explore me</p>
            <FanPageCardsContainer topFiveFanPages={topFiveFanPages}/>
            <FanPageListings allFanPages={allFanPages}/>
        </div>
    )
}

export default ExplorePage;