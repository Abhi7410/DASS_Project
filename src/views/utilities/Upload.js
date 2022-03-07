import PropTypes from 'prop-types';

// material-ui
import { Box, Card, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

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

const UIColor = () => (
    <MainCard title="Media Upload" secondary={<SecondaryAction link="https://next.material-ui.com/system/palette/" />}>
        <Grid container spacing={gridSpacing}>
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
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Box component="span" sx={{ p: 2, border: '1px solid grey', borderRadius: 2, bgcolor: 'primary.light' }}>
                                <Button sx={{ color: 'black' }}>Previous 1</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Box component="span" sx={{ p: 2, border: '1px solid grey', borderRadius: 2, bgcolor: 'primary.200' }}>
                                <Button sx={{ color: 'black' }}>Previous 2</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Box component="span" sx={{ p: 2, border: '1px solid grey', borderRadius: 2, bgcolor: 'primary.main' }}>
                                <Button sx={{ color: 'primary.light' }}>Previous 3</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Box component="span" sx={{ p: 2, border: '1px solid grey', borderRadius: 2, bgcolor: 'primary.dark' }}>
                                <Button sx={{ color: 'primary.light' }}>Previous 4</Button>
                            </Box>
                        </Grid>
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
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Box component="span" sx={{ p: 2, border: '1px solid grey', borderRadius: 2, bgcolor: '#f7adad' }}>
                                <Button sx={{ color: 'black' }}>Previous 1</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Box component="span" sx={{ p: 2, border: '1px solid grey', borderRadius: 2, bgcolor: '#f58484' }}>
                                <Button sx={{ color: 'black' }}>Previous 2</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Box component="span" sx={{ p: 2, border: '1px solid grey', borderRadius: 2, bgcolor: '#f54c4c' }}>
                                <Button sx={{ color: 'primary.light' }}>Previous 3</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Box component="span" sx={{ p: 2, border: '1px solid grey', borderRadius: 2, bgcolor: '#ff0000' }}>
                                <Button sx={{ color: 'primary.light' }}>Previous 4</Button>
                            </Box>
                        </Grid>
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
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Box component="span" sx={{ p: 2, border: '1px solid grey', borderRadius: 2, bgcolor: 'secondary.light' }}>
                                <Button sx={{ color: 'black' }}>Previous 1</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Box component="span" sx={{ p: 2, border: '1px solid grey', borderRadius: 2, bgcolor: 'secondary.200' }}>
                                <Button sx={{ color: 'black' }}>Previous 2</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Box component="span" sx={{ p: 2, border: '1px solid grey', borderRadius: 2, bgcolor: 'secondary.main' }}>
                                <Button sx={{ color: 'primary.light' }}>Previous 3</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Box component="span" sx={{ p: 2, border: '1px solid grey', borderRadius: 2, bgcolor: 'secondary.dark' }}>
                                <Button sx={{ color: 'primary.light' }}>Previous 4</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
        </Grid>
    </MainCard>
);

export default UIColor;
