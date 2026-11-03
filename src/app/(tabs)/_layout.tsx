import { FontAwesome } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Inicio',
          title: 'Inicio',
          drawerIcon: ({ color }) => (<FontAwesome name="user" size={24} color={'red'}></FontAwesome>),
        }}
      />
      <Drawer.Screen
        name="nosotros" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Nosotros',
          title: 'Nosotros',
          drawerIcon: ({ color }) => (<FontAwesome name="envelope" size={24} color={'blue'}></FontAwesome>),
        }}
      />
      <Drawer.Screen
        name="contactos" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Contactos',
          title: 'Contactos',
          drawerIcon: ({ color }) => (<FontAwesome name="comment" size={24} color={'pink'}></FontAwesome>),
        }}
      />
    </Drawer>
  );
}
