import React, {useState, useRef} from 'react';
import {View, Switch, Animated, Text,FlatList, SectionList} from 'react-native';
import TopNavigation from './../component/topBanner';
import {BANNER_H} from './../component/constants';
import connect1 from './../api/connect1';

 const light2 = () => {

    const [output1, setOutputs] = useState();
    const request = connect1.get('/data?include=value&limit=1',{}).then ((result)=>{
        setOutputs(result.data);
    });
    

    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const [isEnabled3, setIsEnabled3] = useState(false);
    const [isEnabled4, setIsEnabled4] = useState(false);
    const [isEnabled5, setIsEnabled5] = useState(false);
    const [isEnabled6, setIsEnabled6] = useState(false);
    const [isEnabled7, setIsEnabled7] = useState(false);
    const [isEnabled8, setIsEnabled8] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
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

                            <Text style={styleses.light1}>Temp</Text>
                            
                            <View>     
                            <FlatList scrollEnabled={false} style={styleses.temp1}
                            data={output1}
                            renderItem={({item})=>{
                                    return <Text>{item.value}</Text>
                            }}/>
                            </View>  
                 
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
  temp1: {
    marginLeft: '80%',
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
