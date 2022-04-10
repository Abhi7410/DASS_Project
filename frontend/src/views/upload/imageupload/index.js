// material-ui
// import use state
import { useState } from 'react';
import {
    Drawer,
    Fab,
    FormControl,
    FormControlLabel,
    Grid,
    IconButton,
    Radio,
    RadioGroup,
    Slider,
    Tooltip,
    Typography
} from '@mui/material';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import TextField from '@mui/material/TextField';
import DatePicker from '@mui/lab/DatePicker';
import FileUpload from 'react-mui-fileuploader';
import Dropzone from 'react-dropzone';
import axios from 'axios';

// ==============================|| SAMPLE PAGE ||============================== //

const Image = () => {
    const [acceptedFiles, setAcceptedFiles] = useState([]);
    const [uploadedFile, setUploadedFile] = useState('');
    const [filePath, setFilePath] = useState('');
    const [Name, setName] = useState('');
    const [Purpose, setPurpose] = useState('');
    const [curDate, setDate] = useState(new Date());
    const handleFilesChange = (files) => {
        console.log(files);
        setAcceptedFiles(files);
    };
    function handleUploadedFile(e) {
        setUploadedFile(e.target.value);
    }
    function handleFormSubmission(e) {
        e.preventDefault();

        const form = document.getElementById('form');
        const formData = new FormData(form);
        console.log(form);

        axios.post('http://localhost:4000/upload/upload', formData).then((res) => {
            console.log(res);
            // setFilePath(res.data);
            console.log('Form submitted');

            const newFile = {
                name: Name,
                path: res.data,
                purpose: Purpose,
                created_at: curDate
            };

            axios.post('http://localhost:4000/upload/add', newFile).then((res2) => {
                console.log(res2);
            });
        });
    }
    return (
        <>
            <Grid container spacing={2}>
                {/* <Grid item xs={4}>
                    {item.img ? (
                        <Grid item xs={12}>
                            <img src={'http://localhost:4000/' + item.img} width="100" />
                        </Grid>
                    ) : (
                        ''
                    )}
                </Grid> */}

                <Grid item xs={4}>
                    <MainCard title="Choose Image">
                        <form encType="multipart/form-data" onSubmit={handleFormSubmission} id="form">
                            <input type="file" name="uploadedFile" value={uploadedFile} onChange={handleUploadedFile} required />
                            <button type="submit">
                                <Typography
                                    variant="body2"
                                    style={{
                                        // change background to light purple
                                        backgroundColor: 'transparent',
                                        // increase border radius
                                        borderRadius: '10px',
                                        // increase font size
                                        // fontSize: '16.5rem',
                                        // change font color to white
                                        color: 'grey',
                                        // center text
                                        textAlign: 'center'
                                        // vertically center text
                                    }}
                                >
                                    +
                                </Typography>
                            </button>{' '}
                        </form>

                        {/* */}
                    </MainCard>
                </Grid>
                <Grid item xs={8}>
                    <MainCard title="Image Details">
                        <Typography variant="body2" container spacing={2}>
                            <Grid item xs={12} style={{ margin: 15 }}>
                                <TextField
                                    fullWidth
                                    id="outlined-error"
                                    label="Name"
                                    value={Name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} style={{ margin: 15 }}>
                                <TextField
                                    fullWidth
                                    id="outlined-error"
                                    label="Purpose"
                                    value={Purpose}
                                    onChange={(e) => setPurpose(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} style={{ margin: 15 }}>
                                <TextField
                                    fullWidth
                                    id="outlined-error"
                                    helperText="Upload date"
                                    type="date"
                                    variant="outlined"
                                    value={curDate}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </Grid>
                            {/* 
                            <Grid item xs={12} style={{ margin: 15 }}>
                                    <TextField fullWidth id="outlined-error" label="Extra Field" value={} />
                                </Grid>                                                                 */}
                        </Typography>
                    </MainCard>
                </Grid>
            </Grid>
        </>
    );
};

export default Image;