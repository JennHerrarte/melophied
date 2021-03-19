import DetailEditor from '../DetailEditor/DetailEditor'

const FanPageEditor = () => {
    return(
        <div className="FanPageEditor">
            Fan Page Editor
            <DetailEditor />
            {/* 
            Checklist:
            1. Detail Editor
            2. Track List Editor
            3. Album List Editor
            4. Show List Editor
            5. Submit button with logic to send POST request to the server
            */}
        </div>
    )
}

export default FanPageEditor