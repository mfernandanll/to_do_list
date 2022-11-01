import { Image, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Task } from '../../components/Task';
import { styles } from './style'

export function Home() {
    return (
        <View style={styles.container}>
            <Image style={styles.logo}
                source={require('../../../assets/Logo.png')} />
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#6B6B6B"
                    keyboardType="default"
                />
                <TouchableOpacity style={styles.button}>
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
            <Task />
        </View>
    );
}