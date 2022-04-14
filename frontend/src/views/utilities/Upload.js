import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// material-ui
import { Box, Card, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import axios from 'axios';
// ===============================|| COLOR BOX ||=============================== //

const ColorBox = ({ bgcolor, title, data, dark }) => (
    <>
        <Card sx={{ mb: 3 }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 4.5,
                    bgcolor,
                    color: dark ? 'grey.800' : '#ffffff'
                }}
            >
                {title && (
                    <Typography variant="subtitle1" color="inherit">
                        {title}
                    </Typography>
                )}
                {!title && <Box sx={{ p: 1.15 }} />}
            </Box>
        </Card>
        {data && (
            <Grid container justifyContent="space-between" alignItems="center">
                <Grid item>
                    <Typography variant="subtitle2">{data.label}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>
                        {data.color}
                    </Typography>
                </Grid>
            </Grid>
        )}
    </>
);

ColorBox.propTypes = {
    bgcolor: PropTypes.string,
    title: PropTypes.string,
    data: PropTypes.object.isRequired,
    dark: PropTypes.bool
};

// ===============================|| UI COLOR ||=============================== //

const UIColor = () => {
    const [files, setFiles] = useState([]);
    const [selectedImage, setSelectedImage] = useState({ _id: -1 });
    const [selectedAudio, setSelectedAudio] = useState({ _id: -1 });
    const [selectedVideo, setSelectedVideo] = useState({ _id: -1 });
    const [loading, setLoading] = useState(false);

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

    function send4lipsync() {
        if (selectedImage._id === -1 || selectedAudio._id === -1) {
            alert('Please select all the files');
            return;
        }
        setLoading(true);
        const data = {
            audio_path: selectedAudio.path,
            image_path: selectedImage.path
        };
        axios
            .post('http://localhost:4000/upload/modelize', data)
            .then((res) => {
                console.log(res.data);
                // openInNewTab(res.data.url);
                window.focus();
                window.open(res.data.url, '_blank');
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }

    useEffect(() => {
        axios
            .get('http://localhost:4000/upload/get_files')
            .then((res) => {
                setFiles(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <MainCard title="Media Upload" secondary={<SecondaryAction link="https://next.material-ui.com/system/palette/" />}>
            <Grid container spacing={gridSpacing} alignItems="center" justifyContent="center">
                <Grid item xs={12}>
                    <SubCard title="Image Upload">
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12} sm={6} md={4} lg={2}>
                                <Box component="span" sx={{ p: 2, border: '1px dashed grey', borderRadius: 2 }}>
                                    <Button component={Link} to="/utils/upload-image" sx={{ color: 'black' }}>
                                        +
                                    </Button>
                                </Box>
                            </Grid>
                            {files.map((file) =>
                                file.type === 'image' ? (
                                    <Grid item xs={12} sm={6} md={4} lg={2}>
                                        <Button
                                            sx={{ color: 'black' }}
                                            onClick={() => {
                                                setSelectedImage(file);
                                                console.log(selectedImage);
                                            }}
                                        >
                                            <div
                                                component="span"
                                                style={{
                                                    p: 2,
                                                    border: '1px solid grey',
                                                    borderRadius: 2,
                                                    backgroundColor: file._id === selectedImage._id ? 'green' : 'grey'
                                                }}
                                            >
                                                <div>
                                                    <img
                                                        style={{ width: '100%', height: '100%' }}
                                                        alt="Custom"
                                                        src={'http://localhost:4000/' + file.path}
                                                    />
                                                </div>
                                            </div>
                                        </Button>
                                    </Grid>
                                ) : (
                                    ''
                                )
                            )}
                        </Grid>
                    </SubCard>
                </Grid>
                <Grid item xs={12}>
                    <SubCard title="Video Upload">
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12} sm={6} md={4} lg={2}>
                                <Box component="span" sx={{ p: 2, border: '1px dashed grey', borderRadius: 2 }}>
                                    <Button component={Link} to="/utils/upload-image" sx={{ color: 'black' }}>
                                        +
                                    </Button>
                                </Box>
                            </Grid>

                            {files.map((file) =>
                                file.type === 'video' ? (
                                    <Grid item xs={12} sm={6} md={4} lg={2}>
                                        <Button
                                            sx={{ color: 'black' }}
                                            onClick={() => {
                                                setSelectedVideo(file);
                                            }}
                                        >
                                            <div
                                                component="span"
                                                style={{
                                                    p: 2,
                                                    border: '1px solid grey',
                                                    borderRadius: 2,
                                                    backgroundColor: file._id === selectedVideo._id ? 'green' : 'primary.light'
                                                }}
                                            >
                                                <div>
                                                    {file.name} : {file.purpose}
                                                </div>
                                            </div>
                                        </Button>
                                    </Grid>
                                ) : (
                                    ''
                                )
                            )}
                        </Grid>
                    </SubCard>
                </Grid>
                <Grid item xs={12}>
                    <SubCard title="Audio Upload">
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12} sm={6} md={4} lg={2}>
                                <Box component="span" sx={{ p: 2, border: '1px dashed grey', borderRadius: 2 }}>
                                    <Button component={Link} to="/utils/upload-image" sx={{ color: 'black' }}>
                                        +
                                    </Button>
                                </Box>
                            </Grid>
                            {files.map((file) =>
                                file.type === 'audio' ? (
                                    <Grid item xs={12} sm={6} md={4} lg={2}>
                                        <Button
                                            sx={{ color: 'black' }}
                                            onClick={() => {
                                                setSelectedAudio(file);
                                            }}
                                        >
                                            <div
                                                component="span"
                                                style={{
                                                    p: 2,
                                                    border: '1px solid grey',
                                                    borderRadius: 2,
                                                    backgroundColor: file._id === selectedAudio._id ? 'green' : 'primary.light'
                                                }}
                                            >
                                                <div>
                                                    {file.name} : {file.purpose}
                                                </div>
                                            </div>
                                        </Button>
                                    </Grid>
                                ) : (
                                    ''
                                )
                            )}
                        </Grid>
                    </SubCard>
                </Grid>
                <Grid item xs={1} alignContent="center" justifyContent="center">
                    {/* <Box component="span" sx={{ p: 2, border: '1px dashed grey', borderRadius: 2, marginLeft: 85 }}> */}
                    <LoadingButton
                        onClick={() => send4lipsync()}
                        endIcon={<SendIcon />}
                        loading={loading}
                        loadingPosition="end"
                        variant="contained"
                    >
                        Send
                    </LoadingButton>

                    {/* </Box> */}
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default UIColor;
