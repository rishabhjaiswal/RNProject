import {
  StackNavigator,
} from 'react-navigation';
import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/ProfileScreen";

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
},
{
  initialRouteName: 'Home',
}
);

export default App;