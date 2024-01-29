import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button,StatusBar } from 'react-native';
import { useState } from 'react';

const Box = ({ data, getFromChild }) => {
    let [form, getForm] = useState(false)
    const handleClick = () => {
        getForm(true)
    }
    getFromChild(form)
    return (
        <>
            <StatusBar barStyle="light-content" hidden />
            <ScrollView style={styles.box}>
                {data.map((value, id) => (
                    <View key={id} style={styles.card}>
                        <View style={styles.space} >
                            <Text style={styles.cardText}>Time: </Text>
                            <Text style={styles.cardText}>{value.time} </Text>
                        </View>
                        <View style={styles.space} >
                            <Text style={styles.cardText}>Date: </Text>
                            <Text style={styles.cardText}>{value.date} </Text>
                        </View>
                        <View style={styles.space} >
                            <Text style={styles.cardText}>Consider:</Text>
                            <Text style={styles.cardText}>{value.availability}</Text>
                        </View>
                        <Button title="Check" onPress={() => { handleClick() }} />
                    </View>
                ))}

            </ScrollView>
        </>

    );
};

const styles = StyleSheet.create({
    box: {
        padding: 40,
        backgroundColor:"black",
    },
    card: {
        backgroundColor: "white",
        borderColor: "#ddd",
        borderWidth: 1,
        padding: 20,
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        marginTop: 20,
    },
    cardText: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: "bold"
    },
    space: {
        justifyContent: "space-around",
        flexDirection: "row",

    }
});

export default Box;
