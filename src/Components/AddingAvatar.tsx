import Modal from '@mui/material/Modal';
import Avatar from 'react-avatar-edit';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import PhotoChooseWindow from '../types/PhotoChooseWindow';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';
import style from './../styles/ComponentStyles/Profile.module.css';

const AddingAvatar: React.FC<PhotoChooseWindow> = ({renderChoosePhotoHandler, renderChoosePhoto, setPreview, preview}) => {

    const [image, setImage] = useState<any>(null);


    const onCloseAvatar = () => {
        setPreview(null);
    }

    const onCrop = (view: any) => {
        setPreview(view)
    }
    return (
            <div>
                <Modal open={renderChoosePhoto} onClose={renderChoosePhotoHandler} style={{'display': 'flex','justifyContent': 'center', 'alignItems': 'center'}}>
                    <ClickAwayListener onClickAway={renderChoosePhotoHandler}>
                        <article className={style.modal}>
                            <span onClick={renderChoosePhotoHandler}><ClearIcon id={style.clear} color='secondary' /></span>
                            <Avatar onClose={onCloseAvatar} onCrop={onCrop} src={image} width={400} height={340}/>
                        </article>
                    </ClickAwayListener>
                </Modal>
            </div>
    )
}

export default AddingAvatar;