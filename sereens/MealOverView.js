import { Text, View ,StyleSheet, FlatList} from "react-native";
import { MEALS,CATEGORIES } from "../data/dummy-data";
import MealItem from '../MealList/MealItem'
import { useLayoutEffect } from "react";
import MealsList from '../MealList/MealsList'
function MealOverView({route,navigation}){
    const catId= route.params.catagoryId;
    const displayMeals =MEALS.filter((mealItem)=>{
        return( mealItem.categoryIds.indexOf(catId)>=0);
    });
    useLayoutEffect(()=>{
        const catagoryTil =CATEGORIES.find(
            (catagory)=>catagory.id === catId)
            .title;
            navigation.setOptions({
            title:catagoryTil
        });
    },[catId,navigation])
    
   
return(
   <MealsList item={displayMeals}/>
)
}
export default MealOverView;
