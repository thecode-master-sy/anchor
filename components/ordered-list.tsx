import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { StyledFlatlist } from "./native-wind-components";



const OrderedList = ({ data }: { data: string[] }) => {
	return (
		<StyledFlatlist
			className="mt-7"
			data={data}
			renderItem={({ item, index }) => (
				<View style={styles.item}>
					<Text style={styles.index}>{index + 1}. </Text>
					<Text style={styles.text}>{item}</Text>
				</View>
			)}
			keyExtractor={(item, index) => index.toString()}
		/>
	);
};

const styles = StyleSheet.create({
	item: {
		flexDirection: "row",
		marginBottom: 10,
	},
	index: {
		fontWeight: "bold",
		color: "white",
	},
	text: {
		fontSize: 16,
		color: "white",
	},
});

export default OrderedList;
