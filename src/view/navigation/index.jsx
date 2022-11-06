import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome } from '../screens/Welcome';
import { ShoppingListScreen } from '../screens/ShoppingList';
import { ShoppingRouteScreen } from '../screens/ShoppingRoute';
import { FinishShoppingScreen } from '../screens/FinishShopping';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    )
}

function RootNavigator() {
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Welcome} options={{headerShown: false}}/>
            <Stack.Screen name="ShoppingList" component={ShoppingListScreen} options={{headerShown: false}}/>
            <Stack.Screen name="ShoppingRoute" component={ShoppingRouteScreen} options={{headerShown: false}}/>
            <Stack.Screen name="ShoppingFinish" component={FinishShoppingScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}