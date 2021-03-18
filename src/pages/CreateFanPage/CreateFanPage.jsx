import FanPageEditor from '../../components/FanPageEditor/FanPageEditor'
import ArtistSelector from '../../components/ArtistSelector/ArtistSelector'

const CreateFanPage = () => {


    return (
        <div className="CreateFanPage">
            <ArtistSelector />
            <FanPageEditor />
        </div>
    )
}

export default CreateFanPage