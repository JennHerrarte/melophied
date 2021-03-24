//TODO function to pull user's fan pages

const UserFanPages = ({recentUserPages}) => {
console.log(recentUserPages)
    return (
        <div>
        <h1>My fan pages</h1>
        <ul>
           {
               recentUserPages.map((page, idx) => {
                return(
                
                    <li key={idx}>Fan Page:{page.pageTitle} {page.artistData.id}</li>
                  
                    ) 
               })
           } 
        </ul>
        </div>
    )
}

export default UserFanPages;