import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigation } from '@react-navigation/stack'
import { createDrawerNavigation } from '@react-navigation/drawer'
import HomeScreen from "../screens/HomeScreen";
import AddProductScreen from "../screens/AddProductScreen";
import { Icon } from "react-native-elements";

const Stack = createStackNavigation()
const Drawer = createDrawerNavigation()

const DrawerNav = () => {
    return(
        <Drawer.Navigator initialRouteName ='Home'>
            <Drawer.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    title: 'Daily Fashion',
                    headerStyle: {
                        backgroundColor: '#D1E5C2'
                    },
                    headerTitleAlign: 'center',
                    drawerIcon: config =>
                        <Icon
                            name="home"
                            type='antdesign'
                        />
                }}
            />
            <Drawer.Screen
                name='AddProduct'
                component={AddProductScreen}
                options={{
                    title: 'Add Product',
                    headerStyle: {
                        backgroundColor: '#D1E5C2'
                    },
                    headerTitleAlign: 'center',
                    drawerIcon: config =>
                        <Icon
                            name="plus"
                            type='antdesign'
                        />
                }}
            />
        </Drawer.Navigator>
    )
}

const MainNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Drawer'>
                <Stack.Screen
                    name='Drawer'
                    component={DrawerNav}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator;