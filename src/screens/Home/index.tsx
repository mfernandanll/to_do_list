import { useState } from 'react';
import { Image, Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Task, TaskType } from '../../components/Task';
import { styles } from './style';

export function Home() {
    const [tasks, setTasks] = useState<TaskType[]>([])
    const [taskDescription, setTaskDescription] = useState('');
    const [countCreatedTasks, setCountCreatedTasks] = useState(0);
    const [countDoneTasks, setCountDoneTasks] = useState<number>(0)


    function handleTaskAdd(taskDescription: string) {
        const task: TaskType = {
            id: Math.random(),
            description: taskDescription,
            done: false
        }

        setTasks(prevState => [...prevState, task])
        setCountCreatedTasks(countCreatedTasks + 1)
        setTaskDescription('');
    }

    function handleTaskRemove(id: number) {
        Alert.alert("Remover", `Remover tarefa selecionada? `, [
            {
                text: "Sim",
                onPress: () => {
                    setTasks(prevState => prevState.filter(task => {
                        if (task.id === id && task.done) {
                            setCountDoneTasks(countDoneTasks - 1);
                        }
                        return task.id !== id;
                    }))
                    setCountCreatedTasks(countCreatedTasks - 1);
                }
            },
            {
                text: "Não",
                style: "cancel"
            }
        ]);
    }

    function handleMarkTaskAsDone(id: number) {
        setTasks(array => array.map(item => {
            if (item.id === id) {
                item.done = !item.done
                item.done ? setCountDoneTasks(countDoneTasks + 1) : setCountDoneTasks(countDoneTasks - 1);
            }
            return item;
        }))
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
                <TouchableOpacity style={styles.button} onPress={() => handleTaskAdd(taskDescription)}>
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
                        value={countCreatedTasks.toString()}
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
                        value={countDoneTasks.toString()}
                        defaultValue='0'
                        editable={false}
                    />
                </View>
            </View>
            <FlatList
                data={tasks}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <Task
                        key={item.id}
                        description={item.description}
                        onCheckboxPress={handleMarkTaskAsDone}
                        onPressRemove={handleTaskRemove}
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
        </View>
    );
}