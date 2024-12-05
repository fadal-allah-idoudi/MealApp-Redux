import { View,Text, Button,Image, StyleSheet, ScrollView } from "react-native";
import MealsList from '../MealList/MealsList'
import { useContext } from "react";
import {MEALS} from '../data/dummy-data';
import { useDispatch, useSelector } from "react-redux";
function Favorites(){
    const favoriteMealids=useSelector(state => state.favoritemeal.ids);
    const choosenOnes=MEALS.filter((meal)=>favoriteMealids.includes(meal.id));
return(
    <MealsList item={choosenOnes}/>
)
}
export default Favorites;