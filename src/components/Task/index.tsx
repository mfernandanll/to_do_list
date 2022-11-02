import { Text, TouchableOpacity, View, Pressable } from "react-native";
import { styles } from "./style";
import { Ionicons } from '@expo/vector-icons';

export interface TaskInterface {
    id: number;
    description: string;
    done: boolean;
}

type Props = {
    description: string,
    onCheckboxPress: (id: number) => void,
    onPressRemove: (id: number) => void,
    item: TaskInterface;
}

export function Task({ description,
    onCheckboxPress,
    onPressRemove,
    item }: Props) {

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.checkboxBase, item.done && styles.checkboxChecked]}
                onPress={() => onCheckboxPress(item.id)}
            >
                {item.done && <Ionicons name="checkmark" size={20} color="white" />}
            </Pressable>

            <Text
                style={[styles.taskDescriptionBase, item.done && styles.taskDescriptionChecked]}>
                {description}
            </Text>

            <TouchableOpacity style={styles.deleteButton} onPress={() => onPressRemove(item.id)}>
                <Ionicons style={styles.trashIcon} name="trash-outline" />
            </TouchableOpacity>
        </View>
    )
}