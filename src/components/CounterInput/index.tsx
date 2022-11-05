import { Text, TextInput, View } from "react-native";
import { styles } from "./style";

type Props = {
    title: string;
    counter: number;
}

export function CounterInput({ title, counter: countCreatedTasks }: Props) {
    return (
        <View style={styles.counterView}>
            <Text style={styles.createdText}>
                {title}
            </Text>
            <TextInput
                style={styles.counter}
                value={countCreatedTasks.toString()}
                defaultValue='0'
                editable={false}
            />
        </View>
    )
}