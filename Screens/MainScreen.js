import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ReceiptFragment from "../Fragments/ReceiptFragment";
import ExpensesFragment from "../Fragments/ExpensesFragment";
import {useLayoutEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {Icon} from "@rneui/base"

const Tab = createBottomTabNavigator();


const MainScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false // hiding or disabling the default header from react-native
        })
    }, []);

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Receipts"
                component={ReceiptFragment}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Icon  name="receipt" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="Expenses"
                component={ExpensesFragment}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Icon type="font-awesome" name="book" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

export default MainScreen;