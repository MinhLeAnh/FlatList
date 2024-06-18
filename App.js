import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
    title: 'Bước 1 Xác định nhu cầu khách hàng ',
    content:'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    date:'20/08/2020, 06:00',
    isRead:'1'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2',
    title: 'Bạn có khách hàng mới!',
    content: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay',
    date:'20/08/2020, 06:00',
    isRead:'0'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba3',
    title: 'Khách hàng được chia sẻ bị trùng',
    content: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng',
    date:'20/08/2020, 06:00',
    isRead:'0'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba4',
    title: 'Khách hàng được chia sẻ bị trùng',
    content: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng',
    date:'20/08/2020, 06:00',
    isRead:'0'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba5',
    title: 'Công việc sắp đến hạn trong hôm nay',
    content: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.',
    date:'20/08/2020, 06:00',
    isRead:'1'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba6',
    title: 'Công việc đã quá hạn',
    content: 'Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc',
    date:'20/08/2020, 06:00',
    isRead:'1'
  },
];

const Item = ({title,content,date,isRead}) => (
  <View style={[styles.item,{ backgroundColor: isRead === '1' ? '#fff' : '#D1EEEE' }]}>
    {isRead === '0' && <Icon name="notifications-outline" style={styles.icon} />}
    {isRead === '1' && <Icon name="checkmark-circle-outline" style={styles.icon} />}  
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} content={item.content} date={item.date} isRead ={item.isRead} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flexDirection:'row',
    padding: 10,
    marginVertical: 2,
    marginHorizontal: 5,
    justifyContent:'space-between',
    alignItems:'center',
    
  },
  icon:{
    color:'blue',
    fontSize:30,
    marginLeft:10
  },

  textContainer:{
    flexDirection:'row',
    flexWrap:'wrap',
    marginRight:40,
    marginLeft:20
  },
  title: {
    fontSize: 16,
    fontWeight:'bold'
  },
  content:{
    fontSize:15,
    flexWrap:'wrap'
  },
  date:{
    fontSize:15,
    paddingTop:6
  },
  
});

export default App;