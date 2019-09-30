import React from 'react';

import Button from '~/styles/components/Button'
import { Container, SignForm } from '../styles';

const SignIn = () => {
    return (
        <Container>
            <SignForm onSubmit={ () => {} }>
                <h1>Boas Vindas</h1>

                <span>E-mail</span>
                <input type="email" name="email"/>

                <span>Senha</span>
                <input type="password" name="password" />

                <Button size="big" type="submit">
                    Entrar
                </Button>

            </SignForm>
        </Container>
    );
}

export default SignIn;
