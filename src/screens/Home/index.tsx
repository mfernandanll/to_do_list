import { styles } from './style';
import { useState } from 'react';
import { Image, View, Alert } from 'react-native';
import { TaskType } from '../../components/Task';
import { CounterInput } from '../../components/CounterInput';
import { TodoInput } from "../../components/TodoInput";
import { TodoList } from '../../components/TodoList';

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
            <TodoInput
                setTaskDescription={setTaskDescription}
                taskDescription={taskDescription}
                onPress={handleTaskAdd} />
            <View style={styles.subtittles}>
                <CounterInput title='Criadas' counter={countCreatedTasks} />
                <CounterInput title='Concluídas' counter={countDoneTasks} />
            </View>
            <TodoList
                tasks={tasks}
                onCheckboxPress={handleMarkTaskAsDone}
                onPressRemove={handleTaskRemove}
            />
        </View>
    );
}