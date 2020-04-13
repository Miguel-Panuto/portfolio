import React from 'react';

import { Container, ProfileContainer } from './styles';

export default function Apresentation() {
    return (
        <Container>
            <div className="container">
                <h1>
                    Hello,<br />
                    I am Miguel
                </h1>
                <ProfileContainer />
            </div>
        </Container>
    );
}
