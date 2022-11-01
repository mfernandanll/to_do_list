import { useState } from "react";
import { Text, TouchableOpacity, View, Pressable } from "react-native";
import { styles } from "./style";
import { Ionicons } from '@expo/vector-icons';

type Props = {
    description: string,
    onRemove: () => void;
}


export function Task({ description, onRemove }: Props) {
    const [checked, setChecked] = useState(false);

    function onCheckmarkPress() {
        setChecked(!checked);
    }

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.checkboxBase, checked && styles.checkboxChecked]}
                onPress={onCheckmarkPress}>
                {checked && <Ionicons name="checkmark" size={20} color="white" />}
            </Pressable>

            <Text 
                style={[styles.taskDescriptionBase, checked && styles.taskDescriptionChecked]}>
                {description}
            </Text>

            <TouchableOpacity style={styles.deleteButton} onPress={onRemove}>
                <Ionicons style={styles.trashIcon} name="trash-outline" />
            </TouchableOpacity>
        </View>
    )
}