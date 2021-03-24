// this component holds the fan page cards for the home component

import FanPageCard from  '../FanPageCard/FanPageCard'

// TODO currently top 5 fan pages just showing ID, will need to update this

const FanPageCardsContainer = ({topFiveFanPages}) => {

  // console.log(topFiveFanPages, "top5")


    return(
        <div className='FanPageCardsContainer'>
              <ul>
                {
                    topFiveFanPages.map((page, idx) => {
                        return(
                        <li key={`Top5-upvotes-${idx}`}>Total Upvotes:{page.len}</li>
                        
                        )
                    })
                }
               
            </ul>  
            <FanPageCard/>
        </div>
    )   
}

export default FanPageCardsContainer;