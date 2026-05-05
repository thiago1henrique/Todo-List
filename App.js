import {StyleSheet, View, FlatList, Button} from 'react-native';
import {StatusBar} from 'expo-status-bar';

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

import {useState} from "react";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);
    const [modalIsVisible, setModalIsVisible] = useState(false);

    function startAddGoalHandler() {
        setModalIsVisible(true);
    }

    function endGoalHandler() {
        setModalIsVisible(false);
    }

    function addGoalHandler(entredGoalText) {
        setCourseGoals(currentCourseGoals => [...currentCourseGoals, {
            text: entredGoalText,
            id: Math.random().toString()
        }]);
        setModalIsVisible(false);
    }

    function deleteGoalHandler(id) {
        setCourseGoals(currentCourseGoals => {
            return currentCourseGoals.filter(goal => goal.id !== id);
        })
    }

    return (
        <>
            <StatusBar style="dark"/>
            <View style={styles.appContainer}>
                <Button title='Adicione uma nova meta' color="#16161d" onPress={startAddGoalHandler}/>
                <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endGoalHandler}/>

                <View style={styles.goalsContainer}>
                    <FlatList data={courseGoals} renderItem={(itemData) => {
                        return <GoalItem onDeleteItem={deleteGoalHandler} id={itemData.item.id}
                                         text={itemData.item.text}/>;
                    }}
                              keyExtractor={(item, index) => {
                                  return item.id;
                              }}
                    />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 80,
        paddingHorizontal: 16,
    },

    goalsContainer: {
        flex: 10
    }
});