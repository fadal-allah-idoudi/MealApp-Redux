import { Text, View ,StyleSheet, FlatList} from "react-native";
import MealItem from './MealItem';
function MealsList({item}){
    function renderMealItem(itemData){
        const item =itemData.item;
        const mealItemProps={
            title: item.title,
            imageUrl:item.imageUrl,
            affordability:item.affordability,
            complexity:item.complexity,
            duration:item.duration,
            catId:item.id
        };
        return (<MealItem {...mealItemProps}/>)
    }
    return(
        <View style={styles.container}>
        <FlatList data={item} 
        keyExtractor={(item)=>item.id} 
        renderItem={renderMealItem}
        />
    </View>
    )
}
export default MealsList;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:16
    },
  });
  