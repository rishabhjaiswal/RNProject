import {
  StackNavigator,
} from 'react-navigation';
import HomeScreen from "./containers/HomeScreen";
import ProfileScreen from "./containers/ProfileScreen";
import LoginScreen from "./containers/LoginScreen";

const AppNavigator  = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
  Login: { screen: LoginScreen },
},
{
  initialRouteName: 'Home',
}
);

export default AppNavigator;