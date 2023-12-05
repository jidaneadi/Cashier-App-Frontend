import {
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Text,
  FlatList,
} from "react-native";
import React from "react";
import { Ionicons } from "react-native-vector-icons";
import { Card, IconButton } from "react-native-paper";

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
  icontButton: {
    margin: 5,
    borderRadius: 10,
    backgroundColor: "white",
    width: 100,
    height: 50,
  },
  cardContainer: {
    height: 200,
    width: 150,
    marginRight: 10,
    marginBottom: 10,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

const gambar = require("../../../assets/icon.png");

export default function CashierScreen() {
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={[styles.borderShadow, styles.searchBar]}>
            <Ionicons name="search" size={12} />
            <TextInput placeholder="Cari produk makanan atau minuman" />
          </View>
          <IconButton icon="menu" />
        </View>

        {/* Scroll Menu Satuan*/}
        <View>
          <Text style={styles.textStyle}>Menu Satuan</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Array.from(Array(5)).map(() => (
              <Card style={styles.cardContainer}>
                <Card.Cover
                  style={{
                    height: 140,
                    borderRadius: 0,
                  }}
                />
                <Card.Content
                  style={{
                    padding: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "500",
                    }}
                  >
                    Makanan
                  </Text>
                  <Text>Rp. 15.000</Text>
                </Card.Content>
              </Card>
            ))}
          </ScrollView>
        </View>

        {/* Scroll Paket Crispy*/}
        <View>
          <Text style={styles.textStyle}>Paket Crispy</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Array.from(Array(5)).map(() => (
              <Card style={styles.cardContainer}>
                <Card.Cover
                  style={{
                    height: 140,
                    borderRadius: 0,
                  }}
                />
                <Card.Content
                  style={{
                    padding: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "500",
                    }}
                  >
                    Makanan
                  </Text>
                  <Text>Rp. 15.000</Text>
                </Card.Content>
              </Card>
            ))}
          </ScrollView>
        </View>

        {/* Scroll Paket Penyetan*/}
        <View>
          <Text style={styles.textStyle}>Paket Penyetan</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Array.from(Array(5)).map(() => (
              <Card style={styles.cardContainer}>
                <Card.Cover
                  style={{
                    height: 140,
                    borderRadius: 0,
                  }}
                />
                <Card.Content
                  style={{
                    padding: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "500",
                    }}
                  >
                    Makanan
                  </Text>
                  <Text>Rp. 15.000</Text>
                </Card.Content>
              </Card>
            ))}
          </ScrollView>
        </View>

        {/* Scroll Menu Mie Pedas*/}
        <View>
          <Text style={styles.textStyle}>Menu Mie Pedas</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Array.from(Array(5)).map(() => (
              <Card style={styles.cardContainer}>
                <Card.Cover
                  style={{
                    height: 140,
                    borderRadius: 0,
                  }}
                />
                <Card.Content
                  style={{
                    padding: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "500",
                    }}
                  >
                    Makanan
                  </Text>
                  <Text>Rp. 15.000</Text>
                </Card.Content>
              </Card>
            ))}
          </ScrollView>
        </View>

        {/* Scroll Saus Spesial*/}
        <View>
          <Text style={styles.textStyle}>Saus Spesial</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Array.from(Array(5)).map(() => (
              <Card style={styles.cardContainer}>
                <Card.Cover
                  style={{
                    height: 140,
                    borderRadius: 0,
                  }}
                />
                <Card.Content
                  style={{
                    padding: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "500",
                    }}
                  >
                    Makanan
                  </Text>
                  <Text>Rp. 15.000</Text>
                </Card.Content>
              </Card>
            ))}
          </ScrollView>
        </View>

        {/* Scroll Menu Sayur*/}
        <View>
          <Text style={styles.textStyle}>Menu Sayur</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Array.from(Array(5)).map(() => (
              <Card style={styles.cardContainer}>
                <Card.Cover
                  style={{
                    height: 140,
                    borderRadius: 0,
                  }}
                />
                <Card.Content
                  style={{
                    padding: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "500",
                    }}
                  >
                    Makanan
                  </Text>
                  <Text>Rp. 15.000</Text>
                </Card.Content>
              </Card>
            ))}
          </ScrollView>
        </View>

        {/* Scroll Minuman*/}
        <View>
          <Text style={styles.textStyle}>Minuman</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Array.from(Array(5)).map(() => (
              <Card style={styles.cardContainer}>
                <Card.Cover
                  style={{
                    height: 140,
                    borderRadius: 0,
                  }}
                />
                <Card.Content
                  style={{
                    padding: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "500",
                    }}
                  >
                    Makanan
                  </Text>
                  <Text>Rp. 15.000</Text>
                </Card.Content>
              </Card>
            ))}
          </ScrollView>
        </View>

        {/* Scroll Minuman Varian Rasa*/}
        <View>
          <Text style={styles.textStyle}>Minuman Rasa</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Array.from(Array(5)).map(() => (
              <Card style={styles.cardContainer}>
                <Card.Cover
                  style={{
                    height: 140,
                    borderRadius: 0,
                  }}
                />
                <Card.Content
                  style={{
                    padding: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "500",
                    }}
                  >
                    Makanan
                  </Text>
                  <Text>Rp. 15.000</Text>
                </Card.Content>
              </Card>
            ))}
          </ScrollView>
        </View>

        {/* Scroll Menu Lain-Lain*/}
        <View>
          <Text style={styles.textStyle}>Menu Lain-Lain</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Array.from(Array(5)).map(() => (
              <Card style={styles.cardContainer}>
                <Card.Cover
                  style={{
                    height: 140,
                    borderRadius: 0,
                  }}
                />
                <Card.Content
                  style={{
                    padding: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "500",
                    }}
                  >
                    Makanan
                  </Text>
                  <Text>Rp. 15.000</Text>
                </Card.Content>
              </Card>
            ))}
          </ScrollView>
        </View>

        {/* Scroll Minuman*/}
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Array.from(Array(5)).map(() => (
              <IconButton
                icon={({ color, size }) => (
                  <View
                    style={{
                      alignContent: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Ionicons name={"home-outline"} color={color} size={size} />
                    <Text
                      style={{
                        fontSize: 12,
                      }}
                    >
                      Home
                    </Text>
                  </View>
                )}
                style={styles.icontButton}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
      {/* Card Menu */}
      {/* <ScrollView>
        <Card style={styles.cardContainer}>
           <Card.Cover source={gambar}>

          </Card.Cover>
        </Card>
        <Card style={styles.cardContainer}>
           <Card.Cover source={gambar}>

          </Card.Cover>
        </Card>
        <Card style={styles.cardContainer}>
           <Card.Cover source={gambar}>

          </Card.Cover>
        </Card>
        <Card style={styles.cardContainer}>
           <Card.Cover source={gambar}>

          </Card.Cover>
        </Card>
      </ScrollView> */}
    </View>
  );
}
