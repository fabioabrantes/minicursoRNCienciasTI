import {Text, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';

interface IProps{
  name:string;
  remove: (name:string)=>void;
}

export function Participant({name,remove}:IProps){
  return (
    <View style={styles.container}>
      <Text style={styles.nameParticipant}>{name}</Text>
      <TouchableOpacity style={styles.button} onPress={()=>remove(name)}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}