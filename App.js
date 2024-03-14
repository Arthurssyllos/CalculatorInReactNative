import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const buttons = ['AC', 'DEL', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '3', '2', '1', '+', '0', '.', '+/-', '='];

export default function App() {
  const [currentNumber, setCurrentNumber] = useState("");
  const [lastNumber, setLastNumber] = useState("");

  const handleButtonPress = (button) => {
    switch (button) {
      case "=":
        calculateResult();
        break;
      case "DEL":
        setCurrentNumber(currentNumber.slice(0, -1)); // Remove o último caractere
        break;
      case "AC":
        setCurrentNumber(""); // Limpa a expressão
        break;
      default:
        setCurrentNumber(currentNumber + button);
    }
  };

  const calculateResult = () => {
    let result;
    try {
      result = eval(currentNumber); // Avalia a expressão matemática
      setCurrentNumber(result.toString()); // Define o resultado como o novo número atual
      setLastNumber(currentNumber); // Salva a expressão anterior
    } catch (error) {
      setCurrentNumber("Erro"); // Exibe "Erro" se houver algum problema de cálculo
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={{ fontSize: 20, margin: 10 }}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) => (
          <TouchableOpacity key={button} style={styles.button} onPress={() => handleButtonPress(button)}>
            <Text style={styles.textButton}>{button}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  result: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    height: 100,
    backgroundColor: '#f5f5f5',
    marginBottom: 10
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    minHeight: 80,
    minWidth: 80
  },
  textButton: {
    color: "#5b5b5b",
    fontSize: 25,
  }
});
