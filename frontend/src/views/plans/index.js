// material-ui

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
import ReactDOM from 'react-dom';
import { PricingTable, PricingSlot, PricingDetail } from 'react-pricing-table';
import './styles.css';

// ==============================|| SAMPLE PAGE ||============================== //

const Plans = () => (
    <PricingTable highlightColor="#1976D2" className="pricingTable">
        <PricingSlot buttonText="TRY IT FREE" title="FREE" priceText="$x/month" styles={{ backgroundColor: 'yellow', fontSize: '20px' }}>
            <PricingDetail> Create Free Avatars</PricingDetail>
        </PricingSlot>
        <PricingSlot buttonText="TRY IT FREE" title="Prime" priceText="$y/month">
            <PricingDetail> Everything in FREE + </PricingDetail>
            <PricingDetail> Ad Free Viewing Experience </PricingDetail>
            <PricingDetail> Extra Features like Background etc.</PricingDetail>
            <PricingDetail> </PricingDetail>
        </PricingSlot>
        <PricingSlot buttonText="TRY IT FREE" title="VIP" priceText="$z/month">
            <PricingDetail> Everything in Prime + </PricingDetail>
            <PricingDetail> All Premimum Experience</PricingDetail>
        </PricingSlot>
    </PricingTable>
);

export default Plans;
