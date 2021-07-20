import React, {useCallback, useEffect, useState} from 'react';

import styled from 'styled-components/native';

import {useDispatch, useSelector} from 'react-redux';

import {getCharacters, moreCharacters} from '../store/marvel/marvelActions';
import magnifier from '../assets/magnifier.png'

const HomeScreen = ({navigation}) => {
    const [search, newSearch] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const characters = useSelector(state => state.characters) || [];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCharacters());
    }, [dispatch]);

    return (
        <>
            <ContainerSearch>
                <Search 
                    placeholder="Pesquisar"
                    onChangeText={newPesquisa => newSearch(newPesquisa)}
                    value={search}
                />
                <Magnifier
                    onPress={() => {setSearchTerm(search)}}
                >
                    <MagnifierImage source={magnifier} />
                </Magnifier>
            </ContainerSearch>
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

                <More
                    onPress={() => {dispatch(moreCharacters(characters, () => {}));}}
                >
                    <MoreText>
                        Mais Personagens
                    </MoreText>
                </More>
            </Screen>
        </>
    );
};

const Screen = styled.ScrollView`
    background-color: #ec1d24;
`;

const ContainerSearch = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: white;
`;

const Search = styled.TextInput`
    width: 80%;
    height: 50;
    border-radius: 30;
    background-color: white;
    border: 2px solid black;
`;

const Magnifier = styled.TouchableOpacity`
    width: 12%; 
`;

const MagnifierImage = styled.Image`
    width: 50;
    height: 50;
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
    margin-top: 15;
    margin-bottom: 15;
`;

const More = styled.TouchableOpacity`
    width: 100%;
    height: 50;
    background-color: white;
    align-items: center;
    justify-content: center;
`;

const MoreText = styled.Text`
    font-size: 20;
    color: black;
    text-align: center;
`;

export default HomeScreen;
