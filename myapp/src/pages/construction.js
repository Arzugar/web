import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from '../components/header';
const ConstructionPage = () => {
    return (
        <div>
            <Header />
            <Container>
                <h1 className='text-primary'>Site en construction</h1>
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.leparisien.fr%2Fresizer%2FVfey6LpteAkXt-wgnOOROMGh86g%3D%2F1280x672%2Farc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com%2Fpublic%2FTWXDWP66U7UTLKC5LMVYOWS2Z4.jpg&f=1&nofb=1&ipt=f64c0380dc6294970b9b328dcd1a76cd16948c3aac3c2a47acd1b4b6f84a3800&ipo=images" alt="Image de construction" />
            </Container>
        </div >
    );
};

export default ConstructionPage;