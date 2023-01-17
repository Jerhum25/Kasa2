import s from "./style.module.scss";
import TitreLocation from '../TitreLocation/TitreLocation'
import TagsLocation from '../TagsLocation/TagsLocation'
import ProfileLocation from '../ProfileLocation/ProfileLocation'
import RatingLocation from '../RatingLocation/RatingLocation'
function InfosLocation(props) {
    return (
        <div className={s.container}>
            <TitreLocation/>
            <TagsLocation/>
            <ProfileLocation/>
            <RatingLocation/>
        </div>
    );
}

export default InfosLocation;