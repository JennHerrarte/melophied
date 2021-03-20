// this component holds the fan page cards for the home component

import FanPageCard from  '../FanPageCard/FanPageCard'

// TODO currently top 5 fan pages just showing ID, will need to update this

const FanPageCardsContainer = ({topFiveFanPages}) => {
    return(
        <div className='FanPageCardsContainer'>
            <ul>
                {
                    topFiveFanPages.map((page,idx) => {
                        return(
                        <li key={`Top5${idx}`}>Top Five Fan Page ID:{page._id}</li>
                        )
                    })
                }
            </ul>
            <FanPageCard/>
        </div>
    )   
}

export default FanPageCardsContainer;