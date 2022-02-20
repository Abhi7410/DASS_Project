// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const Demo = () => (
    <MainCard title="Demonstration">
        {/* <Typography variant="body2">This is where a demo video of how to use the website will go</Typography> */}

        <iframe
            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
            height="500rem"
            width="1000rem"
            style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                display: 'block',
                marginTop: '1rem',
                marginBottom: '1rem'
            }}
        />
    </MainCard>
);

export default Demo;
