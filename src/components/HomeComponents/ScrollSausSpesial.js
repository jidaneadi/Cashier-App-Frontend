import React from 'react';
import GlobalStyle from "../../styles/GlobalStyle";
import { View, ScrollView, Text } from "react-native";
import { Card} from "react-native-paper";

export default function ScrollSausSpesial() {
  return (
    <View>
      <Text style={GlobalStyle.textStyle}>Saus Spesial</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Array.from(Array(5)).map(() => (
          <Card style={GlobalStyle.cardContainer}>
            <Card.Cover
              style={GlobalStyle.cardCover}
            />
            <Card.Content
              style={GlobalStyle.cardContent}
            >
              <Text
                style={GlobalStyle.textCardContent}
              >
                Makanan
              </Text>
              <Text>Rp. 15.000</Text>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </View>
  )
}
