import {useState} from 'react';
import {ScrollView, Text, TextInput, TouchableOpacity, View,Alert, FlatList} from 'react-native';

import { Participant } from '../../components/Participant';

import {styles} from './styles';

export function Home(){
  const [name,setName] = useState('');
  const [names,setNames] = useState<string[]>([]);

  function handleAddNameUser(){
    const existNameUser = names.includes(name);
    if(existNameUser || name === ''){
      return Alert.alert('Error', 'já existe o nome deste participante')
    }
    /* const newArrayName = names;
      newArrayName.push(name);
      setNames(newArrayName) ;
    */
    setNames(namesPrev => [...namesPrev,name]);
    setName('');
  }

  function removeNameUser(name:string){
    Alert.alert("Remover", `remover ${name}`,[
      {
        text:'não',
        style:'cancel',
      },
      {
        text:'sim',
        onPress:()=>{
          setNames(arrayAtual=> arrayAtual.filter(participant=> participant !== name));
        }
      }
    ]);
  }
  
  return (
    <View style={styles.container}>
     <View style={styles.header}>
      <Text style={styles.title}>Nome do evento</Text>
      <Text style={styles.dateEvent}>Sexta, 4 de Novembro de 2022.</Text>
     </View>

     <View style={styles.form}>
      <TextInput
        placeholder='insira seu nome'
        placeholderTextColor="#FDFCFE"
        style={styles.input}
        onChangeText={setName}
        value={name}
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={handleAddNameUser}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
     </View>

     <Text style={styles.title2}>Participantes</Text>
     <ScrollView>
      {
        names.length !== 0 ? (
          names.map(name => (
            <Participant key={name} name={name} remove={removeNameUser}/>
          )))
        : (
          <Text style={styles.eventDate}>Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença</Text>
        )
      }
      </ScrollView>
      {/* <FlatList 
        data={names}
        keyExtractor={name => name}
        renderItem={({item})=>(
          <Participant name={item}/>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={()=>(
          <Text style={styles.eventDate}>Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença</Text>
        )}
      /> */}
    </View>
  );
}