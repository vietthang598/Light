import React, {useState, useRef} from 'react';
import {View, Switch, Animated, Text} from 'react-native';
import TopNavigation from './../component/topBanner';
import {BANNER_H} from './../component/constants';
import connect1 from './../api/connect1';

 const light2 = () => {

    const [output1, setOutputs] = useState();
    const request = connect1.get('/',{}).then (()=>{
        setOutputs(result.data);
    });
    


    const [isEnabled2, setIsEnabled2] = useState(false);
    const [isEnabled3, setIsEnabled3] = useState(false);
    const [isEnabled4, setIsEnabled4] = useState(false);
    const [isEnabled5, setIsEnabled5] = useState(false);
    const [isEnabled6, setIsEnabled6] = useState(false);
    const [isEnabled7, setIsEnabled7] = useState(false);
    const [isEnabled8, setIsEnabled8] = useState(false);
    const toggleSwitch = () => setOutputs(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
    const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);
    const toggleSwitch5 = () => setIsEnabled5(previousState => !previousState);
    const toggleSwitch6 = () => setIsEnabled6(previousState => !previousState);
    const toggleSwitch7 = () => setIsEnabled7(previousState => !previousState);
    const toggleSwitch8 = () => setIsEnabled8(previousState => !previousState);
    const scrollA = useRef(new Animated.Value(0)).current;
    return (
    <View style={styleses.backgr}>
      <TopNavigation title="Light Control System" scrollA={scrollA} />
      <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollA}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}
      >
        <View style={styleses.bannerContainer}>
          <Animated.Image
            style={styleses.banner(scrollA)}
            source={require('./../assets/img/background.png')}
          />
        </View>

        <View style={styleses.view1}>
            <View style={styleses.view2}>

                            <Text style={styleses.light1}>Light</Text>
                            <Switch style={styleses.switch1}
                            trackColor={{false: '#767577', true: '#81b0ff'}}
                            thumbColor={output1 ? '#f5dd4b' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={output1}
                            />
                 
                            <Text style={styleses.light2}>Automatically Mode</Text>
                            <Switch style={styleses.switch2}
                                trackColor={{false: '#767577', true: '#81b0ff'}}
                                thumbColor={isEnabled2 ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch2}
                                value={isEnabled2}
                            />

                            <Text style={styleses.light3}>Power Saving Mode</Text>
                            <Switch style={styleses.switch3}
                                trackColor={{false: '#767577', true: '#81b0ff'}}
                                thumbColor={isEnabled3 ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch3}
                                value={isEnabled3}
                            />

                            <Text style={styleses.light4}>Sleep Mode</Text>
                            <Switch style={styleses.switch4}
                                trackColor={{false: '#767577', true: '#81b0ff'}}
                                thumbColor={isEnabled4 ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch4}
                                value={isEnabled4}
                            />
            </View>

            <View style={styleses.view3}>
                            <Text style={styleses.light1}>Advanced Mode</Text>
                            <Switch style={styleses.switch1}
                                trackColor={{false: '#767577', true: '#81b0ff'}}
                                thumbColor={isEnabled5 ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch5}
                                value={isEnabled5}
                            />
                            
                            <Text style={styleses.light2}>Home Theater</Text>
                            <Switch style={styleses.switch2}
                                trackColor={{false: '#767577', true: '#81b0ff'}}
                                thumbColor={isEnabled6 ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch6}
                                value={isEnabled6}
                            />

                            <Text style={styleses.light3}>Morning Alarm</Text>
                            <Switch style={styleses.switch3}
                                trackColor={{false: '#767577', true: '#81b0ff'}}
                                thumbColor={isEnabled7 ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch7}
                                value={isEnabled7}
                            />

                            <Text style={styleses.light4}>Sleep</Text>
                            <Switch style={styleses.switch4}
                                trackColor={{false: '#767577', true: '#81b0ff'}}
                                thumbColor={isEnabled8 ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch8}
                                value={isEnabled8}
                            />
            </View>
        </View>

      </Animated.ScrollView>
    </View>
  );
};

const styleses = {
  backgr: {
    backgroundColor: '#695142',
  },

  bannerContainer: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: 'center',
    overflow: 'hidden',
  },
  banner: scrollA => ({
    height: BANNER_H,
    width: '200%',
    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [-BANNER_H / 2, 0, BANNER_H * 0.75, BANNER_H * 0.75],
        }),
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [2, 1, 0.5, 0.5],
        }),
      },
    ],
  }),

  switch1: {
    marginLeft: '80%',
    transform: [{rotate: '270deg'}, {scale: 1.5}],
  },

  switch2: {
    marginTop: '10%',
    marginLeft: '80%',
  },

  switch3: {
    marginLeft: '80%',
  },

  switch4: {
    marginLeft: '80%',
    marginBottom: '5%',
  },

  view1: {
    backgroundColor: '#695142',
  },

  view2: {
    backgroundColor: '#806B5E',
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft: '5%',
    marginRight: '5%',
    borderRadius: 20,
  },

  view3: {
    backgroundColor: '#806B5E',
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft: '5%',
    marginRight: '5%',
    borderRadius: 20,
  },

  light1: {
    fontSize: 25,

    fontWeight: 'bold',
    top: '10%',
    left: '10%',
    color: 'white',
  },

  light2: {
    fontSize: 20,

    fontWeight: 'bold',
    top: '23%',
    left: '10%',
    color: 'white',
  },

  light3: {
    fontSize: 20,

    fontWeight: 'bold',
    top: '10%',
    left: '10%',
    color: 'white',
  },

  light4: {
    fontSize: 20,

    fontWeight: 'bold',
    top: '10%',
    left: '10%',
    color: 'white',
  },
 }

 export default light2;
