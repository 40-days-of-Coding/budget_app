import {View, Text, TextInput} from 'react-native';
import {useState} from "react";

const InputFieldComponent = (props) => {
    const [focus, setFocus] = useState(false);
    console.log(`${props.label} : ${props.classes}`);
    return (

        <View className="mt-2 mx-3">
            {
                props.label &&
                <Text className="text-lg mb-1">
                    {props.label}
                </Text>
            }
            <TextInput
                placeholder={props.placeholder}
                multiline={props.multiline}
                numberOfLines={props.numberOfLines}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                keyboardType={props.keyboardType}
                className={`
                    rounded-md px-2 h-10 text-lg border-2 ${props.className}
                    ${focus ? "border-gray-400" : "border-gray-200"}
                `}
            />
        </View>
    );
};

export default InputFieldComponent;