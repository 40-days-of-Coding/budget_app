import React, {useRef} from "react";
import {View, Button, ScrollView} from "react-native";
import RBSheet from "@nonam4/react-native-bottom-sheet";

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

                    </ScrollView>
                </View>
            </RBSheet>
        </View>
    );
}