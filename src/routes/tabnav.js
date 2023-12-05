import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "react-native-vector-icons";
import CashierScreen from "../../views/screen/home/CashierScreen";
import TransaksiScreen from "../../views/screen/home/TransaksiScreen";
import ProductScreen from "../../views/screen/home/ProductScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import GlobalStyle from "../styles/GlobalStyle";

const Tabs = createBottomTabNavigator();
export default function TabsNav() {
  return (
    <SafeAreaView style={GlobalStyle.droidSafeArea}>
    <Tabs.Navigator
      screenOptions={{
        // tabBarShowLabel:false,
        tabBarActiveTintColor: "#04364A",
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 15,
          left: 25,
          right: 25,
          borderRadius:10,
          padding: 10,
        },
      }}
    >
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "calculator" : "calculator-outline"}
              size={24}
              color="#04364A"
            />
          ),
        }}
        name="Orders"
        component={CashierScreen}
      ></Tabs.Screen>
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "document-text" : "document-text-outline"}
              size={24}
              color="#04364A"
            />
          ),
        }}
        name="Laporan"
        component={TransaksiScreen}
      ></Tabs.Screen>
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "fast-food" : "fast-food-outline"}
              size={24}
              color="#04364A"
            />
          ),
        }}
        name="Product"
        component={ProductScreen}
      ></Tabs.Screen>
    </Tabs.Navigator>
    </SafeAreaView>
  );
}
