import React from 'react'
import styled from "styled-components";
import Section from './Section';

const Home = () => {

    return (
        <Container>
        <Section 
            title="Model S"
            description="Order Online For Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Iventory"
        />
        <Section 
            title="Model Y"
            description="Order Online For Touchless Delivery"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Iventory"
        />
        <Section 
            title="Model 3"
            description="Order Online For Touchless Delivery"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Iventory"
        />
        <Section 
            title="Model X"
            description="Order Online For Touchless Delivery"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Iventory"
        />
        <Section 
            title="Lowest Cost Solar Panels In America"
            description="Money-back gurantee"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
        />
        <Section 
            title="Solar For New Roofs"
            description="Solar Roof Costs Less Than A New Roof Plus Solar Panels"
            backgroundImg="solar-roof.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
        />
        <Section 
            title="Accessories"
            description=""
            backgroundImg="accessories.jpg"
            leftBtnText="Shop Now"
        />
        </Container>
    )
    }

export default Home

const Container = styled.div`
    height: 120vh;
`