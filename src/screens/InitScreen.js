import React from 'react';

import styled from 'styled-components/native';

const InitScreen = ({navigation}) => {
  return (
    <Screen>
        <Title>
            Teste da Tron
        </Title>
        <Subtitle>
            Consumindo API da Marvel
        </Subtitle>
        <Init onPress={() => {navigation.navigate('Home')}}>
            <InitText>
                Iniciar
            </InitText>
        </Init>
    </Screen>
  );
};

const Screen = styled.View`
    justify-content: center;
    align-items: center;
    background-color: #ec1d24;
    height: 100%;
`;

const Title = styled.Text`
    font-size: 30px;
    color: white;
`;

const Subtitle = styled.Text`
    font-size: 20px;
    color: white;
`;

const Init = styled.TouchableOpacity`
    background-color: white;
    width: 100px;
    height: 30px;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
`;

const InitText = styled.Text`
    font-size: 20;
    color: #ec1d24;
`;

export default InitScreen;
