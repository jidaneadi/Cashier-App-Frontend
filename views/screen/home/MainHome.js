import { View, StyleSheet, ScrollView, Text } from "react-native";
import React from "react";
import ScrollMenuSatuan from "../../../src/components/HomeComponents/ScrollMenuSatuan";
import ScrollPaketCrispy from "../../../src/components/HomeComponents/ScrollPaketCrispy";
import ScrollPaketPenyetan from "../../../src/components/HomeComponents/ScrollPaketPenyetan";
import ScrollMiePedas from "../../../src/components/HomeComponents/ScrollMiePedas";
import ScrollSausSpesial from "../../../src/components/HomeComponents/ScrollSausSpesial";
import ScrollMenuSayur from "../../../src/components/HomeComponents/ScrollMenuSayur";
import ScrollMinuman from "../../../src/components/HomeComponents/ScrollMinuman";
import ScrollMinumanRasa from "../../../src/components/HomeComponents/ScrollMinumanRasa";
import ScrollMenuLain from "../../../src/components/HomeComponents/ScrollMenuLain";
import SearchBarHome from "../../../src/components/SearchBarComponents/SearchBarHome";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 15,
    gap: 10,
    marginBottom: 50,
  },

  icontButton: {
    margin: 5,
    borderRadius: 10,
    backgroundColor: "white",
    width: 100,
    height: 50,
  },
});

const gambar = require("../../../assets/icon.png");

export default function CashierScreen() {
  return (
    <View style={styles.mainContainer}>
      {/* Search Bar */}
      <SearchBarHome />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Scroll Menu Satuan*/}
        <ScrollMenuSatuan />

        {/* Scroll Paket Crispy*/}
        <ScrollPaketCrispy />

        {/* Scroll Paket Penyetan*/}
        <ScrollPaketPenyetan />

        {/* Scroll Menu Mie Pedas*/}
        <ScrollMiePedas />

        {/* Scroll Saus Spesial*/}
        <ScrollSausSpesial />

        {/* Scroll Menu Sayur*/}
        <ScrollMenuSayur />

        {/* Scroll Minuman*/}
        <ScrollMinuman />

        {/* Scroll Minuman Varian Rasa*/}
        <ScrollMinumanRasa />

        {/* Scroll Menu Lain-Lain*/}
        <ScrollMenuLain />
      </ScrollView>
    </View>
  );
}
