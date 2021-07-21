import React, {useCallback, useEffect, useState, useRef} from 'react';

import styled from 'styled-components/native';

import {useDispatch, useSelector} from 'react-redux';

import {getCharacters, moreCharacters} from '../store/marvel/marvelActions';
import magnifier from '../assets/magnifier.png'

const HomeScreen = ({navigation}) => {
    const [search, setSearch] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [count, setCount] = useState(0);
    const characters = useSelector(state => state.characters) || [];
    const dispatch = useDispatch();
    const scrollRef = useRef();

    useEffect(() => {
        dispatch(getCharacters());
    }, []);

    function filterCharacters(character) {
        return(
            character.name.toUpperCase().includes(searchTerm.toUpperCase())
        );
    }

    return (
        <>
            <ContainerSearch>
                <Search 
                    placeholder="Pesquisar"
                    onChangeText={newPesquisa => setSearch(newPesquisa)}
                    value={search}
                />
                <Magnifier
                    onPress={() => {setSearchTerm(search)}}
                >
                    <MagnifierImage source={magnifier} />
                </Magnifier>
            </ContainerSearch>
            <Screen ref={scrollRef}>
                {characters
                .filter(character => filterCharacters(character))
                .map(character => (
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
            <ContainerButtons>
                <Button
                    onPress={() => {
                        if(count >= 1) {
                            setCount((oldCount) => {
                                const newCount = oldCount - 1;
                                dispatch(moreCharacters(newCount, () => {}));
                                console.log('Entrou no Voltar: ', newCount);
                                setSearchTerm('');
                                setSearch('');
                                setTimeout(() => {
                                    scrollRef.current.scrollTo({
                                        y: 0,
                                        animated: true,
                                    });
                                }, 50);
                                return newCount
                            });
                        }
                    }}
                >
                    <ButtonText>
                        {"<<<"}
                    </ButtonText>
                </Button>
                <Button
                    onPress={() => {
                        if(count >= 0) {
                            setCount((oldCount) => {
                                const newCount = oldCount + 1;
                                dispatch(moreCharacters(newCount, () => {}));
                                console.log('Entrou no Ir: ',newCount);
                                setSearchTerm('');
                                setSearch('');
                                setTimeout(() => {
                                    scrollRef.current.scrollTo({
                                        y: 0,
                                        animated: true,
                                    });
                                }, 50);
                                return newCount
                            });
                        }
                    }}
                >
                    <ButtonText>
                        {">>>"}
                    </ButtonText>
                </Button>
            </ContainerButtons>
            
        </>
    );
};

const Screen = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    }
}))`
    background-color: #efefef;
`;

const ContainerSearch = styled.View`
    flex-direction: row;
    justify-content: center;
    background-color: #efefef;
`;

const Search = styled.TextInput`
    width: 80%;
    height: 50;
    border-radius: 7;
    margin-top: 10;
    background-color: white;
    border: 2px solid black;
    padding-left: 15;
`;

const Magnifier = styled.TouchableOpacity`
    width: 12%; 
    margin-top: 10;
    margin-left: 5;
`;

const MagnifierImage = styled.Image`
    width: 50;
    height: 50;
`;

const Character = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 200;
    height: 210;
`;

const ImageCharacter = styled.Image`
    width: 100;
    height: 100;
    border-radius: 100;
`;

const Name = styled.Text`
    font-size: 20;
    color: black;
    text-align: center;
    margin-top: 15;
    margin-bottom: 15;
`;

const ContainerButtons = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-bottom: 5;
`;

const Button = styled.TouchableOpacity`
    width: 45%;
    height: 50;
    background-color: white;
    border: .5px solid black;
    align-items: center;
    justify-content: center;
    margin-left: 2%;
    margin-right: 2%;
`;

const ButtonText = styled.Text`
    font-size: 20;
    color: black;
    text-align: center;
`;

export default HomeScreen;
