import {Button, TextInput, View, StyleSheet, Modal, Image} from "react-native";
import {useState} from "react";

function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={require('../assets/v3.png')} style={styles.image} resizeMode='contain'/>
                <TextInput style={styles.textInput} placeholder='Suas metas!' value={enteredGoalText} onChangeText={goalInputHandler}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Adicionar meta' color='#16161d' onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancelar' color="#fd1e4b" onPress={props.onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput;
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 24,
        padding: 16,
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#16161d",
        backgroundColor: "#f5f5f5",
        paddingHorizontal: 8,
        paddingVertical: 12,
        width: '100%',
        color: "#16161d",
        marginRight: 8,
        padding: 8
    },

    button: {
        width: 160,
        marginHorizontal: 8,
        marginTop: 16
    },

    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        width: '60%',
    },

    image: {
        width: 100,
        height: 100,
        margin: 20
    }
})