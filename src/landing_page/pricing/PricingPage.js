import React from 'react';
import Hero from './Hero.js'
import Brokerage from "./Brokerage";
import OpenAccount from "../OpenAccount";

function PricingPage() {
    return ( 
        <>
            <Hero/>
            <OpenAccount/>
            <Brokerage/>
        </>
     );
}

export default PricingPage;