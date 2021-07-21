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
                </Div>
            </Character>
        </Screen>
    );
};

const Screen = styled.ScrollView`
    background-color: #efefef;
`;

const Character = styled.View`
    justify-content: center;
    align-items: center;
`;

const ImageCharacter = styled.Image`
    width: 380;
    height: 380;
`;

const Name = styled.Text`
    font-size: 30;
    color: black;
    text-align: center;
`;

const Description = styled.Text`
    font-size: 20;
    color: black;
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
    justify-content: center;
    align-items: center;
`;

const ButtonText = styled.Text`
    font-size: 20;
    color: black;
    text-align: center;
`;

export default HomeInfoScreen;
