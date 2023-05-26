import {View, Text, TextInput, Platform, KeyboardAvoidingView, ScrollView} from 'react-native';

const InputFieldComponent = ({label, placeholder}) => {
    return (

        <View className="mt-2 mx-3">
            {
                label &&
                <Text className="text-lg mb-1">
                    {label}
                </Text>
            }
            <TextInput
                placeholder={placeholder}
                className="border rounded-md px-2 h-9 text-lg border-gray-200"/>
        </View>
    );
};

export default InputFieldComponent;