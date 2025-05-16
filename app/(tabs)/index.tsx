import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
// como não podemos estar estilizando o button como quisermos, estaremos usando touchableOpacity

export default function ContadorSimples() {
  // Estado para armazenar o valor do contador
  const [contador, setContador] = useState(0);
  const [mensagem, setMensagem] = useState('')

  // Funções para manipular o contador usando declaração de função normal
  function aumentar() {
    setContador(contador + 1);
  }

  function diminuir() {
    setContador(contador - 1);
  }

  function resetar() {
    setContador(0);
    mostrarMensagem()
  }

  function mostrarMensagem() {
    setMensagem(`Contador reiniciado`)
    setTimeout(() =>{
      setMensagem('')

    }, 2000)
  }

  return (
    <View style={styles.container}>
      {/* Título do App */}
      <Text style={styles.titulo}>Contador App</Text>

      {/* Valor do Contador */}
      <Text style={styles.contador}>{contador}</Text>

      <Text >{mensagem}</Text>

      {/* Botões de Controle - Usando o componente Button padrão */}
      <View style={styles.botoes}>
        <TouchableOpacity onPress={diminuir} style={styles.sub}>
          <Text style={styles.Text}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={resetar} style={styles.reset}>
          <Text style={styles.Text}>Resetar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={aumentar} style={styles.add}>
          <Text style={styles.Text}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e9e7e7',
  },
  titulo: {
    fontSize: 24,
    fontWeight : 'bold',
    marginBottom: 20,
  },
  contador: {
    fontSize: 40,
    fontWeight: 'bold',
    color : 'black',
    marginBottom: 20,
    width : 100,
    height : 100,
    borderRadius : 50,
    display: 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : 'white',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  Text : {
    color : 'white',
    fontSize : 15,
    fontWeight : 'bold'
  },
  botoes: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    marginTop : 20
  },

  sub : {
    width : 80,
    height : 80,
    borderRadius : 40,
    display: 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : '#fd2448',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  reset : {
    width : 80,
    height : 80,
    borderRadius : 40,
    display: 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : '#65c9eb',
    
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  add : {
    width : 80,
    height : 80,
    borderRadius : 40,
    display: 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : '#63e463', 

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});
