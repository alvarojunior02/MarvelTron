import React, {useEffect, useState} from 'react';
import axios from 'axios';

import styled from 'styled-components/native';

import {baseURL, timestamp, publicKey, hash} from '../config/consts';

const HomeScreen = ({navigation}) => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get(
            `${baseURL}/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`,
        )
        .then(response => {
            setCharacters(response.data.data.results);
            console.log(characters);
        })
        .catch(error => console.log(error));
    }, []);

    return (
        <Screen>
            {characters.map(character => (
                <Character 
                    key={character.id}
                    onPress={() => {navigation.navigate('HomeInfo', {
                        character,
                    })}}
                >
                    <ImageCharacter source={{uri: `${character.thumbnail.path}.${character.thumbnail.extension}`}}/>
                    <Name>
                        {character.name}
                    </Name>
                </Character>
            ))
            }
        </Screen>
    );
};

const Screen = styled.ScrollView`
    background-color: #ec1d24;
`;

const Character = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-left: 20%;
    margin-right: 20%;
`;

const ImageCharacter = styled.Image`
    width: 200;
    height: 200;
    border-radius: 100;
`;

const Name = styled.Text`
    font-size: 20;
    color: white;
    text-align: center;
`;

export default HomeScreen;
