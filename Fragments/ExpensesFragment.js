import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import React, {useLayoutEffect, useRef, useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {Icon} from "@rneui/base";
import RBSheet from "@nonam4/react-native-bottom-sheet";
import {TextInput, TouchableRipple} from "react-native-paper";
import ExpenseComponent from "../Components/ExpenseComponent";

const ExpensesFragment = () => {
    //navigation
    const navigation = useNavigation();
    // states
    const [donationType, setDonationType] = useState("Money");
    const [paymentMethod, setPaymentMethod] = useState("Cash");

    let expenses = [
        {
            expense: "Canopies",
            amount: "1000.00",
            date: "12/10/2023",
            time: "1:09 pm",
        },
        {
            expense: "Samuel John",
            amount: "5000.00",
            date: "03/01/2023",
            time: "12:34 pm",
        },
        {
            expense: "Joseph Asemonu",
            amount: "50.00",
            time: "5:21 am",
            date: "09/03/2023",
        },
        {
            expense: "Aaron Will Djaba",
            time: "8:12 am",
            date: "21/07/2023",
            amount: "100.00",
        },
        {
            expense: "Ben",
            time: "8:12 am",
            date: "21/07/2023",
            amount: "19.00",
        },
        {
            expense: "Mary Cole",
            time: "8:12 am",
            date: "21/07/2023",
            amount: "900.00",
        },
        {
            expense: "Will Perry",
            time: "8:12 am",
            date: "21/07/2023",
            amount: "20.50",
        },
        {
            expense: "Maddy Nannie",
            time: "8:12 am",
            date: "21/07/2023",
            classes: "mb-24",
            amount: "1009.00",
        }
    ]

    let [
        formValues,
        setFormValues
    ] = useState({
        name: "",
        donationType: {
            money: true,
            item: false
        },
        item: "",
        quantity: "",
        paymentMethod: "Cash",
        amount: "",
        address: "",
    });

    // ref
    const refRBSheet = useRef(null);
    const refDonationType = useRef(null);
    const refPaymentMethod = useRef(null);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false // hiding or disabling the default header from react-native
        })
    }, []);

    return (
        <SafeAreaView>
            <View className="bg-white pt-3">
                {/* Page Header */}
                <View className="flex-row items-center space-x-2 border-gray-200 border-b pb-3">
                    <View className="flex-1">
                        <Text className="ml-5 text-2xl font-bold">
                            Expenses
                        </Text>
                    </View>
                    <TouchableRipple
                        onPress={() => refRBSheet.current?.open()}
                        activeOpacity={0.9}
                        className="mr-5 rounded-md px-3 py-2 bg-blue-500">
                        <Icon type="ionicon" name="add-outline" color="white"/>
                    </TouchableRipple>
                </View>
                {/* End Page Header */}
            </View>
            <View className="bg-gray-50">
                <View className="flex-row items-center h-10 ml-5">
                    <Text className="text-lg font-bold">Total: </Text>
                    <Text className="text-lg font-bold">GHs. 2000.00</Text>
                </View>
            </View>

            {/* Expenses */}
            <ScrollView>
                {expenses?.reverse().map(
                    (
                        expense,
                        index,
                        row
                    ) => (
                        index + 1 === row.length ?
                            <>
                                <ExpenseComponent
                                    key={index}
                                    expense={expense.expense}
                                    amount={expense.amount}
                                    date={expense.date}
                                    time={expense.time}
                                    classes="mb-2"
                                />
                                <ExpenseComponent
                                    classes="mb-2"
                                />
                            </> : <ExpenseComponent
                                key={index}
                                expense={expense.expense}
                                amount={expense.amount}
                                date={expense.date}
                                time={expense.time}
                            />
                    ))}
            </ScrollView>
            {/* End Expenses */}

            {/* Add Expense Modal */}
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                animationType="slide"
                height={400}
                customStyles={{
                    container: {
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    }
                }}>
                <View>
                    <View className="items-center text-center border-b border-gray-200">
                        <View className="flex-row items-center">
                            <Text className="flex-1 font-bold ml-4 text-2xl mb-3">
                                Add Expense
                            </Text>
                            <TouchableRipple
                                className="mr-3 mb-3"
                                onPress={() => refRBSheet.current?.close()}
                            >
                                <Icon type="ionicon" size={35} name="close-outline"/>
                            </TouchableRipple>
                        </View>
                    </View>
                    <ScrollView>

                        <View className="flex-1 rounded-t-xl bg-white">
                            <TextInput
                                className="mx-2 mb-1 bg-gray-50"
                                placeholder="Expense"
                                onChangeText={(textValue) => {
                                    formValues.name = textValue;
                                }}
                                label="Expense"
                                mode="outlined"
                                outlineColor="gray"
                                activeOutlineColor="gray"
                            />
                            <TextInput
                                className="mx-2 mb-1 bg-gray-50"
                                placeholder="Amount"
                                label="Amount"
                                mode="outlined"
                                outlineColor="gray"
                                keyboardType="phone-pad"
                                activeOutlineColor="gray"
                                onChangeText={(textValue) => {
                                    formValues.address = textValue;
                                }}
                            />
                            <TextInput
                                className="mx-2 mb-1 bg-gray-50"
                                placeholder="Details"
                                label="Details"
                                mode="outlined"
                                multiline
                                outlineColor="gray"
                                activeOutlineColor="gray"
                                onChangeText={(textValue) => {
                                    formValues.address = textValue;
                                }}
                            />
                            <TouchableRipple
                                rippleColor={"#bdbebe"}
                                onPress={
                                    () => {
                                        alert("sent");
                                        console.log(formValues)
                                    }
                                }
                                className="mb-1 mt-1 py-3 rounded-md px-3 mx-20 bg-blue-500" mode="contained">
                                <Text className="text-white text-lg text-center">Save</Text>
                            </TouchableRipple>
                        </View>
                    </ScrollView>
                </View>
            </RBSheet>
            {/* End Add Expense Modal */}
        </SafeAreaView>
    );
};

export default ExpensesFragment;