import React, { useEffect } from 'react';
import Cropper from 'react-easy-crop';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import { SnackbarContext } from '../snackbar/snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import './cropper.css';
import dataURLtoFile from '../../utils/dataURLtoFile';
import getCroppedImg, { generateDownload } from '../../utils/cropImage';
import CancelIcon from '@mui/icons-material/Cancel';
import { makeStyles } from '@mui/styles';
import { IconButton } from '@mui/material';
import { BackdropContext } from '../backdrop/backdrop';
import axios from 'axios';
const useStyles = makeStyles({
    iconButton: {
        position: 'relative',
        top: '20px',
        right: '20px'
    },
    cancelIcon: {
        color: '#00a3c8',
        fontSize: '30px',
        marginLeft: '20px',
        position: 'relative',
        '&:hover': {
            color: 'red'
        }
    }
});
export default function RenderCropper({ handleCropper, setAvatar }) {
    const inputRef = React.useRef();
    const triggerFileSelectPopup = () => inputRef.current.click();
    const [image, setImage] = React.useState(null);
    const [croppedArea, setCroppedArea] = React.useState(null);
    const [crop, setCrop] = React.useState({ x: 0, y: 0 });
    const [zoom, setZoom] = React.useState(1);
    const classes = useStyles();
    const setStateSnackbarContext = React.useContext(SnackbarContext);
    const { closeBackdrop, showBackdrop } = React.useContext(BackdropContext);

    const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
        setCroppedArea(croppedAreaPixels);
    };

    const onSelectFile = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.addEventListener('load', () => {
                setImage(reader.result);
            });
        }
    };

    const onUpload = async () => {
        if (!image) return null;

        const canvas = await getCroppedImg(image, croppedArea);
        const canvasDataUrl = canvas.toDataURL('image/jpeg');
        const convertedUrlToFile = dataURLtoFile(canvasDataUrl, 'cropped-image.jpeg');
        // console.log(canvasDataUrl);
        console.log(convertedUrlToFile);
        // return null;
        try {
            const formdata = new FormData();
            formdata.append('croppedImage', convertedUrlToFile);
            // showBackdrop();
            const res = await fetch('http://localhost:4000/user/setProfilePic', {
                method: 'POST',
                body: formdata,
                headers: { 'x-access-token': localStorage.getItem('user') }
            });

            const res2 = await res.json();
            // closeBackdrop();
            console.log(res2);
            setAvatar(res2.data);
        } catch (err) {
            // closeBackdrop();
            console.warn(err);
        }
    };

    const onClear = () => {
        if (!image) return null;
        setImage(null);
        return null;
    };
    const onDownload = () => {
        // if (!image) return setStateSnackbarContext(true, 'Please select an image!', 'warning');
        if (!image) {
            return null;
        }
        generateDownload(image, croppedArea);
        return null;
    };

    return (
        <div className="container-cro">
            <IconButton className={classes.iconButton} onClick={handleCropper}>
                <CancelIcon className={classes.cancelIcon} />
            </IconButton>
            <div className="container-cropper">
                {image ? (
                    <>
                        <div className="cropper">
                            <Cropper
                                image={image}
                                crop={crop}
                                zoom={zoom}
                                aspect={1}
                                onCropChange={setCrop}
                                onZoomChange={setZoom}
                                onCropComplete={onCropComplete}
                            />
                        </div>

                        <div className="slider">
                            <Slider min={1} max={3} step={0.1} value={zoom} onChange={(e, zoom) => setZoom(zoom)} />
                        </div>
                    </>
                ) : null}
            </div>

            <div className="container-buttons">
                <input type="file" accept="image/*" ref={inputRef} onChange={onSelectFile} style={{ display: 'none' }} />
                <Button variant="contained" color="primary" onClick={() => onClear()} style={{ marginRight: '10px', marginBottom: '20px' }}>
                    Clear
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={triggerFileSelectPopup}
                    style={{ marginRight: '10px', marginBottom: '20px' }}
                >
                    Choose
                </Button>
                {/* <Button variant="contained" color="secondary" onClick={onDownload} style={{ marginRight: '10px', marginBottom: '20px' }}>
                    Download
                </Button> */}
                <Button variant="contained" color="primary" onClick={onUpload} style={{ marginRight: '10px', marginBottom: '20px' }}>
                    Upload
                </Button>
            </div>
        </div>
    );
}
