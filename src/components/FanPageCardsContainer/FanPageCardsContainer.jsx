// this component holds the fan page cards for the home component

import FanPageCard from  '../FanPageCard/FanPageCard'

const FanPageCardsContainer = () => {
    return(
        <div className='FanPageCardsContainer'>
            <p>This container holds all the fan page cards</p>
            <FanPageCard/>
        </div>
    )   
}

export default FanPageCardsContainer;