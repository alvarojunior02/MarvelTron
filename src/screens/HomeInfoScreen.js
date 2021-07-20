import React, {useEffect, useState} from 'react';

import styled from 'styled-components/native';

import {useNavigation} from '@react-navigation/native';

const HomeInfoScreen = ({route}) => {
    const {character} = route.params;
    const {navigate} = useNavigation();

    return (
        <Screen>
            <Character>
                <Name>
                    {character.name}
                </Name>
                <ImageCharacter source={{uri: `${character.thumbnail.path}.${character.thumbnail.extension}`}}/>
                <Description>
                    {character.description}
                </Description>
                <Div>
                    <Button onPress={() => {navigate('Home')}}>
                        <ButtonText>
                            Voltar
                        </ButtonText>
                    </Button>
                    <Button>
                        <ButtonText>
                            Editar
                        </ButtonText>
                    </Button>
                </Div>
            </Character>
        </Screen>
    );
};

const Screen = styled.ScrollView`
    background-color: #ec1d24;
`;

const Character = styled.View`
    justify-content: center;
    align-items: center;
`;

const ImageCharacter = styled.Image`
    width: 400;
    height: 400;
`;

const Name = styled.Text`
    font-size: 30;
    color: white;
    text-align: center;
`;

const Description = styled.Text`
    font-size: 20;
    color: white;
    text-align: justify;
    margin: 5% 5% 5% 5%;
`;

const Div = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const Button = styled.TouchableOpacity`
    width: 120;
    height: 50;
    background-color: white;
    border: 2px solid black;
    margin-top: 5px;
    margin-bottom: 25px;
    margin-left: 3%;
`;

const ButtonText = styled.Text`
    font-size: 20;
    color: black;
    text-align: center;
    justify-content: center;
    align-items: center;
`;

export default HomeInfoScreen;
