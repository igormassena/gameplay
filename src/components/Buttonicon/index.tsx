import React from 'react';
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';

import DiscordImg from '../../assets/discord.png';
import {s} from './styles';

type Props = TouchableOpacityProps & {
    title: string;
}

export function ButtonIcon({title, ... rest}: Props){
    return(
        <TouchableOpacity style={s.container} {...rest} >
            <View style={s.iconWrapper}>
                <Image source={DiscordImg} style={s.icon}/>
            </View>

            <Text style={s.title}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}