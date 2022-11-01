import { useState } from 'react';
import { Image, Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Task } from '../../components/Task';
import { styles } from './style';

export function Home() {
    const [tasks, setTasks] = useState<string[]>([]);
    const [taskDescription, setTaskDescription] = useState('');

    function handleTaskAdd() {
        setTasks(prevState => [...prevState, taskDescription]);
        setTaskDescription('');
    }

    function handleTaskRemove(taskDescription: string) {
        Alert.alert("Remover", `Remover tarefa selecionada? `, [
            {
                text: "Sim",
                onPress: () => setTasks(prevState => prevState.filter(task => task !== taskDescription))
            },
            {
                text: "Não",
                style: "cancel"
            }
        ]);
        console.log(tasks);
    }

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={require('../../../assets/Logo.png')} />
            </View>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#6B6B6B"
                    keyboardType="default"
                    onChangeText={setTaskDescription}
                    value={taskDescription}
                />
                <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
                    <Text style={styles.buttonText}>
                        ⊕
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.subtittles}>
                <View style={styles.counterView}>
                    <Text style={styles.createdText}>
                        Criadas
                    </Text>
                    <TextInput
                        style={styles.counter}
                        value='0'
                        defaultValue='0'
                        editable={false}
                    />
                </View>

                <View style={styles.counterView}>
                    <Text style={styles.doneText}>
                        Concluídas
                    </Text>
                    <TextInput
                        style={styles.counter}
                        value='0'
                        defaultValue='0'
                        editable={false}
                    />
                </View>
            </View>
            <FlatList
                data={tasks}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Task
                        key={item}
                        description={item}
                        onRemove={() => (handleTaskRemove(item))}
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
        </View>
    );
}