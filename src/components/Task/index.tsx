import { useState } from "react";
import { Text, TouchableOpacity, View, Pressable } from "react-native";
import { styles } from "./style";
import { Ionicons } from '@expo/vector-icons';

export function Task() {
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
                style={[styles.taskDescriptionBase, checked && styles.textDescriptionChecked]}>
                Integer urna interdum massa libero auctor neque turpis turpis semper.
            </Text>

            <TouchableOpacity style={styles.deleteButton}>
                <Ionicons style={styles.trashIcon} name="trash-outline" />
            </TouchableOpacity>
        </View>
    )
}