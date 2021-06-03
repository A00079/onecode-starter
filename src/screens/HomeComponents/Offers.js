import React from 'react'
import { useState } from 'react';
import { FlatList, Text } from "react-native";
import { Card } from "react-native-elements";

const data = [
    {
        imageUrl: "http://via.placeholder.com/160x160",
        title: "something"
    },
    {
        imageUrl: "http://via.placeholder.com/160x160",
        title: "something two"
    },
    {
        imageUrl: "http://via.placeholder.com/160x160",
        title: "something three"
    },
    {
        imageUrl: "http://via.placeholder.com/160x160",
        title: "something four"
    },
    {
        imageUrl: "http://via.placeholder.com/160x160",
        title: "something five"
    },
    {
        imageUrl: "http://via.placeholder.com/160x160",
        title: "something six"
    }
];
const Offers = () => {
    const [data, setData] = useState(data);
    return (
        <FlatList
            horizontal
            data={data}
            renderItem={({ item: rowData }) => {
                return (
                    <Card
                        title={null}
                        image={{ uri: rowData.imageUrl }}
                        containerStyle={{ padding: 0, width: 160 }}
                    >
                        <Text style={{ marginBottom: 10 }}>
                            {rowData.title}
                        </Text>
                    </Card>
                );
            }}
            keyExtractor={(item, index) => index}
        />
    )
}

export default Offers
