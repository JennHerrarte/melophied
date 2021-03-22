const DetailEditor = ({pageTitle, setPageTitle, pageDetail, setPageDetail}) => {
    return (
        <div className="DetailEditor d-flex flex-column">
            <input 
            type="text" 
            name="pageTitle" 
            className="pageTitle" 
            placeholder="Page Title" 
            maxLength="60"
            value={pageTitle} 
            onChange={(e) =>setPageTitle(e.target.value)}
            />
            <textarea 
            name="pageDetail" 
            placeholder="Page Detail" 
            maxLength="250"
            value={pageDetail}
            onChange={(e) =>setPageDetail(e.target.value)}
            >
            </textarea>
        </div>
    )
}

export default DetailEditor