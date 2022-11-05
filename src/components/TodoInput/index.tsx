import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

type Props = {
    setTaskDescription: (taskDescription: string) => void;
    taskDescription: string;
    onPress: (taskDescription: string) => void;
}

export function TodoInput({ setTaskDescription, taskDescription, onPress }: Props) {
    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor="#6B6B6B"
                keyboardType="default"
                onChangeText={setTaskDescription}
                value={taskDescription}
            />
            <TouchableOpacity style={styles.button} onPress={() => onPress(taskDescription)}>
                <Text style={styles.buttonText}>
                    ⊕
                </Text>
            </TouchableOpacity>
        </View>
    )
}