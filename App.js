// import Bai4 from './Bai4';
// import Bai5 from './Bai5';
 import Bai6 from './Bai6';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Bai4/> */}
      {/* <Bai5/> */}
      <Bai6/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
