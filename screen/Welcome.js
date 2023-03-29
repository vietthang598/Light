import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {View, Switch, StyleSheet,Image, ImageBackground, ScrollView, Background, Foreground, Header} from 'react-native';
import ParallaxScroll from '@monterosa/react-native-parallax-scroll';
import {
    styles
} from './../component/style'

 const Welcome = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [enabled, IsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const stoggleSwitch = () => IsEnabled(previousState => !previousState);
    return (
       
            <View style={styles.container}>
                <ImageBackground source={require('./../assets/img/background.png')} style={styles.headerImage}/>
                <StatusBar style="dark" />
                <ScrollView style='scroolb' onMomentumScrollBegin={()=>alert()}>
                    <Switch
                        trackColor={{false: '#767577', true: '#81b0ff'}}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                    <Switch
                        trackColor={{false: '#767577', true: '#81b0ff'}}
                        thumbColor={enabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={stoggleSwitch}
                        value={enabled}
                    />
                    <Switch
                        trackColor={{false: '#767577', true: '#81b0ff'}}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                    <Switch
                        trackColor={{false: '#767577', true: '#81b0ff'}}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                
                
                    
                
                </ScrollView>
            </View>
    );
 }

 export default Welcome;