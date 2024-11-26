import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const Item = ({ data }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data.map((text, index) => (
        <Card key={index} style={styles.card}>
          <Card.Content>
            <Title>Card {index + 1}</Title>
            <Paragraph>{text}</Paragraph>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    marginBottom: 10,
  },
});

{itens.map((item, index) => (
    <Item key={index} item={item} />
  ))}
  
export default Item;

