import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from "./Screens/MainScreen";
import {PaperProvider, Portal} from 'react-native-paper';

const Stack = createNativeStackNavigator();
export default function App() {

    return (
        <PaperProvider>
            <Portal>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Main" component={MainScreen}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </Portal>
        </PaperProvider>
    );
}