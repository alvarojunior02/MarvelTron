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
    background-color: #efefef;
    height: 100%;
`;

const Title = styled.Text`
    font-size: 30px;
    color: black;
`;

const Subtitle = styled.Text`
    font-size: 20px;
    color: black;
`;

const Init = styled.TouchableOpacity`
    background-color: #ec1d24;
    width: 140;
    height: 50;
    margin-top: 20;
    justify-content: center;
    align-items: center;
    border-radius: 30;
`;

const InitText = styled.Text`
    font-size: 20;
    color: white;
`;

export default InitScreen;
