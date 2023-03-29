import styled from 'styled-components';
import {View,Text,Image, StyleSheet} from 'react-native';
import Constants from 'expo-constants';


const StatusBarHeight = Constants.statusBarHeight;

export const colors ={
    primary: "#ffffff",
    secondary: "#E5E7EB",
    tertiary: "#1F2937",
    darklight: "#9CA3AF",
    brand: "#6D28D9",
    green: "#10B981",
    red: "#EF4444",
}
const {primary,secondary,tertiary,darklight,brand,green,red} = colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top:    ${StatusBarHeight + 10}px;
    background-color: ${primary};
`
export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`

export const PageLogo = styled.Image`
    width: 200px;
    height: 200px;
`
export const PageTitle = styled.Text`
    font-size: 50px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding: 10px;
`

export const SubTitle = styled.Text`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight:bold;
    color: ${tertiary};
`

export const StyledFormArea = styled.View`
    width; 90%;
`

export const stylesed = StyleSheet.create({
    container: {
      flex: 1,   
    },
    headerImage:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 420,
        height: 396,
    },
    button: {
      alignItems: 'right',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    }
  });

  const HomeStackScreen = ({navigation}) => {
    const {colors} = useTheme();
    return (
      <HomeStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.background,
            shadowColor: colors.background, // iOS
            elevation: 0, // Android
          },
          headerTintColor: colors.text,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        
        
        <HomeStack.Screen 
          name="light"
          component={CardItemDetails}
          options={({route}) => ({
            // title: route.params.title,
            headerBackTitleVisible: false,
            headerTitle: false,
            headerTransparent: true,
            headerTintColor: '#fff'
          })}
        />
      </HomeStack.Navigator>
    );
  };

