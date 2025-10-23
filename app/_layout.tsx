import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
    return (
        <>
            <StatusBar style="light" />
            <Stack screenOptions={{
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
                <Stack.Screen 
                    name="(tabs)" 
                    options={{ 
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="photo/[id]" 
                    options={{ 
                        title: 'Photo Details',
                        presentation: 'modal'
                    }}
                />
            </Stack>
        </>
    );
}
