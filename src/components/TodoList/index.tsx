import { FlatList, Image, Text, View } from "react-native";
import { Task, TaskType } from '../../components/Task';
import { styles } from "./style";

type Props = {
    tasks: TaskType[];
    onCheckboxPress: (id: number) => void;
    onPressRemove: (id: number) => void;
}

export function TodoList({ tasks, onCheckboxPress, onPressRemove}: Props) {
    return (
        <FlatList
                data={tasks}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <Task
                        key={item.id}
                        description={item.description}
                        onCheckboxPress={onCheckboxPress}
                        onPressRemove={onPressRemove}
                        item={item}

                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={styles.viewEmptyText}>
                        <Image style={styles.clipboardEmptyText}
                            source={require('../../../assets/Clipboard.png')} />
                        <Text style={styles.listEmptyText}>
                            Você ainda não tem tarefas cadastradas
                        </Text>
                        <Text style={styles.listEmptySubText}>
                            Crie tarefas e organize seus itens a fazer
                        </Text>
                    </View>
                )}
            />
    )
}