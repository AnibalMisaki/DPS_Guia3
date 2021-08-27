import { AppRegistry } from "react-native";
import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from "react-native";
import { Card } from "react-native-paper";

const DATA = [
    {
        id: '1',
        title: 'Pupusas',
        description: 'Masa rellena de frijol y queso cocidas a la plancha acompañadas de salsa de tomate y curtido',
        src: require('./src/img/pupusas.jpg')
    },
    {
        id: '2',
        title: 'Yuca frita',
        description: 'Rica yuca frita con salsa de tomate, curtido, chicharron y si lo desea tambien pepesca',
        src: require('./src/img/yuca.jpg')
    },
    {
        id: '3',
        title: 'Tamales',
        description: 'Masa rellena de pollo, salsa, papa y agregados al gusto envuelto en hoja de huerta',
        src: require('./src/img/tamales.jpg')
    },
    {
        id: '4',
        title: 'Atol de elote',
        description: 'bebida a base de atol con leche y maizena',
        src: require('./src/img/atol.jpg')
    }
]

const Item = ({ title, img, description }) => (
    <Card style={styles.item}>
        <View style={{flexDirection: 'row'}}>
            <View>
                <Image style={styles.img} source={img} />
            </View>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.desc}>{description}</Text>
            </View>
        </View>
    </Card>
);

const App = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} img={item.src} description={item.description} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: '#0410FB',
        borderRadius: 20,
        paddingBottom: 5,
        paddingTop: 5,
        paddingLeft: 5,
    },
    title: {
        fontSize: 32,
        color:'white',
        marginLeft: 10
    },
    desc: {
        fontSize:25,
        marginLeft: 10,
        width: 250,
        color:'white',
        textAlign: "justify"
    },
    img:{
        width: 100,
        height: 100,
        borderRadius: 100
    }
}); 

AppRegistry.registerComponent("Anilisis", () => App);