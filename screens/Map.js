import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import MapView from 'react-native-maps';

const parkings = [
    {
        id: 1, 
        title: "Parking 1",
        price: 10,
        rating: 4.2,
        spots: 20,
        free: 10
    },
    {
        id: 2, 
        title: "Parking 2",
        price: 15,
        rating: 4.4,
        spots: 10,
        free: 5
    },
    {
        id: 3, 
        title: "Parking 3",
        price: 10,
        rating: 4.7,
        spots: 15,
        free: 10
    },
]

export default class Map extends Component {
    renderHeader = () => {
        return(
            <View style={styles.header}>
                <Text>This is the Header</Text>
            </View>
        )
    }

    renderParkings = () => {
        return (
            <ScrollView horizontal contentContainerStyle={styles.parkings}>
                {parkings.map(parking => this.renderParking(parking))}
            </ScrollView>
        )
    }

    renderParking = (item) => {
        return (
            <View key={`parking-${item.id}`} contentContainerStyle={styles.parking}>
                <Text>{item.title}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderHeader()}
                <MapView 
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}

                    style={styles.map}
                />
                {this.renderParkings()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    header: {
        flex: 0.5,
        justifyContent: 'center',
    },

    map: {
        flex: 1,
    },

    parkings: {
        position: "absolute",
        right: 8,
        left: 8,
        bottom: 8,
    },

    parking: {
        backgroundColor: "white",
        borderRadius: 6,
        padding: 12,
        marginHorizontal: 24,
    },
})
