import React from 'react';
import { useState } from 'react';
import {View, Text, Image, StatusBar} from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/Buttonicon';
import {s} from './styles';

export function SignIn() {
    const [text,setText] = useState('');


    return(
        <View style={s.container}>
            <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
            />
            <Image source={IllustrationImg} style={s.image} resizeMode="stretch"/>

            <View style={s.content}>
                <Text style={s.title}>
                    Organize {'\n'}
                    suas jogatinas {'\n'}
                    facilmente
                </Text>
                <Text style={s.subtitle}>
                    Crie grupos para jogas seus games {'\n'}
                    favoritos com seus amigos
                </Text>
                <ButtonIcon 
                title="Entrar com Discord"
                activeOpacity={0.7}/>
                
            </View>



        </View>
    )
}
