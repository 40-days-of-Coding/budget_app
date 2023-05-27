import React, {useRef} from "react";
import {View, Button, ScrollView} from "react-native";
import RBSheet from "@nonam4/react-native-bottom-sheet";
import InputFieldComponent from "../Components/InputFieldComponent";

export default function Test() {
    const refRBSheet = useRef(null);
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#000"
            }}>
            <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current?.open()}/>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                animationType="none"
                height={500}
                customStyles={{
                    wrapper: {
                        backgroundColor: "transparent"
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    }
                }}
            >
                <View>
                    <ScrollView>
                        <InputFieldComponent/>
                        <InputFieldComponent/>
                        <InputFieldComponent/>
                        <InputFieldComponent/>
                        <InputFieldComponent/>
                        <InputFieldComponent/>
                        <InputFieldComponent/>
                        <InputFieldComponent/>
                        <InputFieldComponent/>
                        <InputFieldComponent/>
                        <InputFieldComponent/>
                        <InputFieldComponent/>
                        <InputFieldComponent/>
                        <InputFieldComponent/>
                    </ScrollView>
                </View>
            </RBSheet>
        </View>
    );
}