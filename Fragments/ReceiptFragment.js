import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import React, {useLayoutEffect, useReducer, useRef, useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {Icon} from "@rneui/base";
import ReceiptComponent from "../Components/ReceiptComponent";
import RBSheet from "@nonam4/react-native-bottom-sheet";
import {TextInput} from "react-native-paper";

const ReceiptFragment = () => {
    const navigation = useNavigation();
    // states
    const [donationType, setDonationType] = useState("Money");
    const [paymentMethod, setPaymentMethod] = useState("Cash");

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
                            Receipts
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => refRBSheet.current?.open()}
                        activeOpacity={0.9}
                        className="mr-5 rounded-md px-3 py-2 bg-blue-500">
                        <Icon type="ionicon" name="add-outline" color="white"/>
                    </TouchableOpacity>
                </View>
                {/* End Page Header */}
            </View>

            {/* Receipts */}
            <ScrollView>
                <ReceiptComponent
                    name="Honourable Pharaoh"
                    amount="1000.00"
                    payment_method="cash"
                    date="12/10/2023"
                    time="1:09 pm"
                />
                <ReceiptComponent
                    name="Samuel John"
                    amount="5000.00"
                    payment_method="Bank Transfer"
                    date="03/01/2023"
                    time="12:34 pm"
                />
                <ReceiptComponent
                    name="Joseph Asemonu"
                    amount="50.00"
                    payment_method="Card"
                    time="5:21 am"
                    date="09/03/2023"
                />
                <ReceiptComponent
                    name="Aaron Will Djaba"
                    time="8:12 am"
                    payment_method="Cheque"
                    date="21/07/2023"
                    amount="100.00"
                />
                <ReceiptComponent
                    name="Ben"
                    time="8:12 am"
                    payment_method="Cheque"
                    date="21/07/2023"
                    amount="19.00"
                />
                <ReceiptComponent
                    name="Mary Cole"
                    time="8:12 am"
                    payment_method="Cash"
                    date="21/07/2023"
                    amount="900.00"
                />
                <ReceiptComponent
                    name="Will Perry"
                    time="8:12 am"
                    payment_method="Cheque"
                    date="21/07/2023"
                    amount="20.50"
                />
                <ReceiptComponent
                    name="Maddy Nannie"
                    time="8:12 am"
                    payment_method="Cheque"
                    date="21/07/2023"
                    classes="mb-16"
                    amount="1009.00"
                />
            </ScrollView>
            {/* End Receipts */}

            {/* Add Receipt Modal */}
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                animationType="slide"
                height={450}
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
                            <Text className="flex-1 font-bold ml-4 text-2xl py-3">
                                Add Receipt
                            </Text>
                            <TouchableOpacity
                                className="mr-3"
                                onPress={() => refRBSheet.current?.close()}
                            >
                                <Icon type="ionicon" size={35} name="close-outline"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView>

                        <View className="flex-1 rounded-t-xl bg-white">
                            <TextInput
                                className="mx-2 mb-1 bg-gray-50"
                                placeholder="Name"
                                onChangeText={(textValue) => {
                                    formValues.name = textValue;
                                }}
                                label="Name"
                                mode="outlined"
                                outlineColor="gray"
                                activeOutlineColor="gray"
                            />
                            <TextInput
                                className="mx-2 mb-1 bg-gray-50"
                                placeholder="Name"
                                label="Donation Type"
                                mode="outlined"
                                value={donationType}
                                editable={false}
                                right={
                                    <TextInput.Icon
                                        icon="chevron-down"
                                        onPress={() => refDonationType.current?.open()}/>
                                }
                                outlineColor="gray"
                                activeOutlineColor="gray"
                            />
                            {(donationType === "Money") ?
                                <>
                                    <TextInput
                                        className="mx-2 mb-1 bg-gray-50"
                                        placeholder="Payment Method"
                                        label="Payment Method"
                                        mode="outlined"
                                        outlineColor="gray"
                                        editable={false}
                                        activeOutlineColor="gray"
                                        value={paymentMethod}
                                        right={
                                            <TextInput.Icon
                                                icon="chevron-down"
                                                onPress={() => refPaymentMethod.current?.open()}
                                            />
                                        }
                                    />
                                    <TextInput
                                        className="mx-2 mb-1 bg-gray-50"
                                        placeholder="Amount"
                                        label="Amount"
                                        mode="outlined"
                                        keyboardType="numeric"
                                        outlineColor="gray"
                                        activeOutlineColor="gray"
                                        onChangeText={(textValue) => {
                                            formValues.amount = textValue;
                                        }}
                                    />
                                </> : <>
                                    <TextInput
                                        className="mx-2 mb-1 bg-gray-50"
                                        placeholder="Item"
                                        label="Item"
                                        mode="outlined"
                                        outlineColor="gray"
                                        activeOutlineColor="gray"
                                        onChangeText={(textValue) => {
                                            formValues.item = textValue;
                                        }}
                                    />
                                    <TextInput
                                        className="mx-2 mb-1 bg-gray-50"
                                        placeholder="Quantity / Size"
                                        label="Quantity / Size"
                                        mode="outlined"
                                        outlineColor="gray"
                                        activeOutlineColor="gray"
                                        onChangeText={(textValue) => {
                                            formValues.quantity = textValue;
                                        }}
                                    />
                                </>
                            }
                            <TextInput
                                className="mx-2 mb-1 bg-gray-50"
                                placeholder="Address"
                                label="Address"
                                mode="outlined"
                                outlineColor="gray"
                                activeOutlineColor="gray"
                                onChangeText={(textValue) => {
                                    formValues.address = textValue;
                                }}
                            />
                            <TouchableOpacity
                                onPress={
                                    () => {
                                        alert("sent");
                                        console.log(formValues)
                                    }
                                }
                                className="mb-1 mt-1 py-3 rounded-md px-3 mx-20 bg-blue-500" mode="contained">
                                <Text className="text-white text-lg text-center">Save</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </RBSheet>
            {/* End Add Receipt Modal */}

            {/* Donation Type Modal */}
            <RBSheet
                ref={refDonationType}
                closeOnDragDown={true}
                closeOnPressMask={false}
                animationType="slide"
                height={150}
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
                    <View className="rounded-t-xl bg-white">
                        <View>
                            <TouchableOpacity
                                onPress={
                                    () => {
                                        setDonationType("Money");
                                        formValues.donationType.money = true;
                                        formValues.donationType.item = false;
                                        refDonationType.current?.close();
                                    }
                                }
                                className="mt-1 border-b border-t border-gray-200 py-3 px-20">
                                <Text className="text-center text-lg">Money</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={
                                    () => {
                                        setDonationType("Item");
                                        formValues.donationType.item = true;
                                        formValues.donationType.money = false;
                                        refDonationType.current?.close();
                                    }
                                }
                                className="mb-3 border-b border-gray-200 py-3 px-20">
                                <Text className="text-center text-lg">Item</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </RBSheet>
            {/* End Donation Type Modal */}

            {/* Payment Method Modal */}
            <RBSheet
                ref={refPaymentMethod}
                closeOnDragDown={true}
                closeOnPressMask={false}
                animationType="slide"
                height={250}
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
                    <View className="rounded-t-xl bg-white">
                        <View>
                            <TouchableOpacity
                                onPress={
                                    () => {
                                        setPaymentMethod("Cash");
                                        formValues.paymentMethod = paymentMethod;
                                        refPaymentMethod.current?.close();
                                    }
                                }
                                className="mt-1 border-b border-t border-gray-200 py-3 px-20">
                                <Text className="text-center text-lg">Cash</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={
                                    () => {
                                        setPaymentMethod("Cheque");
                                        formValues.paymentMethod = paymentMethod;
                                        refPaymentMethod.current?.close();
                                    }
                                }
                                className="mb-3 border-b border-gray-200 py-3 px-20">
                                <Text className="text-center text-lg">Cheque</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={
                                    () => {
                                        setPaymentMethod("Credit Card");
                                        formValues.paymentMethod = paymentMethod;
                                        refPaymentMethod.current?.close();
                                    }
                                }
                                className="mb-3 border-b border-gray-200 py-3 px-20">
                                <Text className="text-center text-lg">Credit Card</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={
                                    () => {
                                        setPaymentMethod("Mobile Money");
                                        formValues.paymentMethod = paymentMethod;
                                        refPaymentMethod.current?.close();
                                    }
                                }
                                className="mb-3 border-b border-gray-200 py-3 px-20">
                                <Text className="text-center text-lg">Mobile Money</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </RBSheet>
            {/* End Payment Method Modal */}
        </SafeAreaView>
    );
};

export default ReceiptFragment;