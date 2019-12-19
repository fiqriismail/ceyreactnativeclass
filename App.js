import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './HomeScreen';
import About from './About';

const mainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  About: {screen: About},
});

const App = createAppContainer(mainNavigator);

export default App;
