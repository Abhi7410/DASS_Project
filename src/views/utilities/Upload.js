import PropTypes from 'prop-types';

// material-ui
import { Box, Card, Grid, Typography } from '@mui/material';

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
                            <ColorBox
                                bgcolor="primary.light"
                                data={{ label: 'Resolution and Size', color: 'Upload Date' }}
                                title="Previous 1"
                                dark
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox
                                bgcolor="primary.200"
                                data={{ label: 'Resolution and Size', color: 'Upload Date' }}
                                title="Previous 2"
                                dark
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox
                                bgcolor="primary.main"
                                data={{ label: 'Resolution and Size', color: 'Upload Date' }}
                                title="Previous 3"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox
                                bgcolor="primary.dark"
                                data={{ label: 'Resolution and Size', color: 'Upload Date' }}
                                title="Previous 4"
                            />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12}>
                <SubCard title="Video Upload">
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox
                                bgcolor="secondary.light"
                                data={{ label: 'Resolution and Length', color: 'Upload Date' }}
                                title="Previous 1"
                                dark
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox
                                bgcolor="secondary.200"
                                data={{ label: 'Resolution and Length', color: 'Upload Date' }}
                                title="Previous 2"
                                dark
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox
                                bgcolor="secondary.main"
                                data={{ label: 'Resolution and Length', color: 'Upload Date' }}
                                title="Previous 3"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox
                                bgcolor="secondary.dark"
                                data={{ label: 'Resolution and Length', color: 'Upload Date' }}
                                title="Previous 4"
                            />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12}>
                <SubCard title="Audio Upload">
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox
                                bgcolor="success.light"
                                data={{ label: 'Resolution and Length', color: 'Upload Date' }}
                                title="Previous 1"
                                dark
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox
                                bgcolor="success.main"
                                data={{ label: 'Resolution and Length', color: 'Upload Date' }}
                                title="Previous 2"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox
                                bgcolor="success.main"
                                data={{ label: 'Resolution and Length', color: 'Upload Date' }}
                                title="Previous 3"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox
                                bgcolor="success.dark"
                                data={{ label: 'Resolution and Length', color: 'Upload Date' }}
                                title="Previous 4"
                            />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
        </Grid>
    </MainCard>
);

export default UIColor;
