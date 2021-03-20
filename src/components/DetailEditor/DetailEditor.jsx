const DetailEditor = () => {
    return (
        <div className="DetailEditor d-flex flex-column">
            <input type="text" name="pageTitle" className="pageTitle" placeholder="Page Title" maxLength="60"/>
            <textarea name="pageDetail" placeholder="Page Detail" maxLength="250">
            </textarea>
        </div>
    )
}

export default DetailEditor