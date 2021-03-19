const DetailEditor = () => {
    return (
        <div className="DetailEditor d-flex flex-column">
            <input type="text" name="pageTitle" className="pageTitle" placeholder="Page Title" maxlength="60"/>
            <textarea name="pageDetail" placeholder="Page Detail" maxlength="250">
            </textarea>
        </div>
    )
}

export default DetailEditor