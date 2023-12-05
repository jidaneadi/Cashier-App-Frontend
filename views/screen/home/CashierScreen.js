import { View, StyleSheet, TextInput, ScrollView, Text, FlatList } from "react-native";
import React from "react";
import { Ionicons } from "react-native-vector-icons";
import { Card, IconButton} from "react-native-paper";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 15,
    gap: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 35,
    marginHorizontal: 5,
    padding: 10,
    gap: 10,
    borderColor: "gray",
  },
  borderShadow: {
    borderRadius: 50,
    shadowColor: "gray",
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowOpacity: 5,
    shadowRadius: 2,
    elevation: 5,
    borderTopWidth: 0,
    borderLeftWidth: 0.2,
    backgroundColor: "#F5F5F5",
  },
  icontButton:{
    margin:5,
    borderRadius:10,
    backgroundColor:"white",
    width:100,
    height:50,
  },
  cardContainer:{
    height:150,
    marginBottom:10
  }
});

const gambar = require('../../../assets/icon.png')

export default function CashierScreen() {
  return (
    <View style={styles.mainContainer}>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={[styles.borderShadow, styles.searchBar]}>
          <Ionicons name="search" size={12} />
          <TextInput placeholder="Cari produk makanan atau minuman" />
        </View>
        <IconButton icon="menu" />
      </View>

      {/* Scroll Menu */}
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Array.from(Array(5)).map(() => (
          <IconButton 
          icon={({color, size}) => (
            <View
            style={{
              alignContent:"center",
              justifyContent:"center",
            }}
            >
              <Ionicons name={"home-outline"} color={color} size={size} />
              <Text style={{
                fontSize:12,
                }}>
            Home
              </Text>
            </View>
          )}
          style={styles.icontButton}
          />
          ))}
        </ScrollView>
      </View>

      {/* Card Menu */}
      <ScrollView >
        <Card style={styles.cardContainer}>
          {/* <Card.Cover source={gambar}>

          </Card.Cover> */}
        </Card>
        <Card style={styles.cardContainer}>
          {/* <Card.Cover source={gambar}>

          </Card.Cover> */}
        </Card>
        <Card style={styles.cardContainer}>
          {/* <Card.Cover source={gambar}>

          </Card.Cover> */}
        </Card>
        <Card style={styles.cardContainer}>
          {/* <Card.Cover source={gambar}>

          </Card.Cover> */}
        </Card>
        
      </ScrollView>
    </View>
  );
}
