import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const PHOTO_SIZE = (width - 6) / 3; // 3 columns with 2px gaps

// Sample data - in a real app, this would come from a backend
const samplePhotos = [
    { id: '1', uri: 'https://picsum.photos/400/400?random=1', likes: 42, user: 'john_doe' },
    { id: '2', uri: 'https://picsum.photos/400/400?random=2', likes: 128, user: 'jane_smith' },
    { id: '3', uri: 'https://picsum.photos/400/400?random=3', likes: 67, user: 'mike_photos' },
    { id: '4', uri: 'https://picsum.photos/400/400?random=4', likes: 234, user: 'sarah_lens' },
    { id: '5', uri: 'https://picsum.photos/400/400?random=5', likes: 89, user: 'alex_cam' },
    { id: '6', uri: 'https://picsum.photos/400/400?random=6', likes: 156, user: 'emma_pics' },
    { id: '7', uri: 'https://picsum.photos/400/400?random=7', likes: 92, user: 'john_doe' },
    { id: '8', uri: 'https://picsum.photos/400/400?random=8', likes: 203, user: 'jane_smith' },
    { id: '9', uri: 'https://picsum.photos/400/400?random=9', likes: 45, user: 'mike_photos' },
];

export default function Feed() {
    const [photos, setPhotos] = useState(samplePhotos);
    const [refreshing, setRefreshing] = useState(false);
    const router = useRouter();

    const onRefresh = () => {
        setRefreshing(true);
        // Simulate API call
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    };

    const renderPhoto = ({ item }: { item: typeof samplePhotos[0] }) => (
        <TouchableOpacity
            style={styles.photoContainer}
            onPress={() => router.push(`/photo/${item.id}`)}
        >
            <Image source={{ uri: item.uri }} style={styles.photo} />
            <View style={styles.photoOverlay}>
                <Ionicons name="heart" size={16} color="#fff" />
                <Text style={styles.likesText}>{item.likes}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={photos}
                renderItem={renderPhoto}
                keyExtractor={(item) => item.id}
                numColumns={3}
                contentContainerStyle={styles.grid}
                refreshing={refreshing}
                onRefresh={onRefresh}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Ionicons name="images-outline" size={64} color="#666" />
                        <Text style={styles.emptyText}>No photos yet</Text>
                        <Text style={styles.emptySubtext}>Upload your first photo to get started!</Text>
                    </View>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    grid: {
        padding: 1,
    },
    photoContainer: {
        width: PHOTO_SIZE,
        height: PHOTO_SIZE,
        margin: 1,
        position: 'relative',
    },
    photo: {
        width: '100%',
        height: '100%',
    },
    photoOverlay: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingHorizontal: 6,
        paddingVertical: 3,
        borderRadius: 12,
    },
    likesText: {
        color: '#fff',
        fontSize: 12,
        marginLeft: 4,
        fontWeight: '600',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100,
    },
    emptyText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 16,
    },
    emptySubtext: {
        color: '#666',
        fontSize: 14,
        marginTop: 8,
    },
});

