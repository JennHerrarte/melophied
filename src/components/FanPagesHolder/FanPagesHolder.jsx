// this component holds the fan page cards for the home component

import FanPageCard from  '../FanPageCard/FanPageCard'

const FanPagesHolder = () => {
    return(
        <div className='FanPagesHolder'>
            <p>This container holds all the fan page cards</p>
            <FanPageCard/>
        </div>
    )   
}

export default FanPagesHolder;