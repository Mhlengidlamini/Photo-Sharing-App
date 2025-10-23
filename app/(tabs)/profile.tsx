import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const PHOTO_SIZE = (width - 6) / 3;

const userPhotos = [
    { id: '1', uri: 'https://picsum.photos/400/400?random=1' },
    { id: '2', uri: 'https://picsum.photos/400/400?random=2' },
    { id: '3', uri: 'https://picsum.photos/400/400?random=3' },
    { id: '4', uri: 'https://picsum.photos/400/400?random=4' },
    { id: '5', uri: 'https://picsum.photos/400/400?random=5' },
    { id: '6', uri: 'https://picsum.photos/400/400?random=6' },
];

export default function Profile() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.profileImageContainer}>
                    <Image
                        source={{ uri: 'https://picsum.photos/200/200?random=user' }}
                        style={styles.profileImage}
                    />
                    <TouchableOpacity style={styles.editButton}>
                        <Ionicons name="pencil" size={16} color="#fff" />
                    </TouchableOpacity>
                </View>
                
                <Text style={styles.name}>John Doe</Text>
                <Text style={styles.username}>@john_doe</Text>
                <Text style={styles.bio}>
                    📸 Photography enthusiast | 🌍 Travel lover | ✨ Capturing moments
                </Text>

                <View style={styles.statsContainer}>
                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>127</Text>
                        <Text style={styles.statLabel}>Photos</Text>
                    </View>
                    <View style={styles.statDivider} />
                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>1.2K</Text>
                        <Text style={styles.statLabel}>Followers</Text>
                    </View>
                    <View style={styles.statDivider} />
                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>842</Text>
                        <Text style={styles.statLabel}>Following</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.editProfileButton}>
                    <Ionicons name="settings-outline" size={20} color="#fff" />
                    <Text style={styles.editProfileText}>Edit Profile</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.photosSection}>
                <View style={styles.photosSectionHeader}>
                    <Ionicons name="grid" size={24} color="#fff" />
                    <Text style={styles.photosSectionTitle}>My Photos</Text>
                </View>
                
                <View style={styles.photosGrid}>
                    {userPhotos.map((photo) => (
                        <Image
                            key={photo.id}
                            source={{ uri: photo.uri }}
                            style={styles.gridPhoto}
                        />
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    header: {
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#222',
    },
    profileImageContainer: {
        position: 'relative',
        marginBottom: 16,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#0a84ff',
    },
    editButton: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        backgroundColor: '#0a84ff',
        width: 32,
        height: 32,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#000',
    },
    name: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    username: {
        color: '#666',
        fontSize: 16,
        marginBottom: 12,
    },
    bio: {
        color: '#ccc',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    statsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    statItem: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    statNumber: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    statLabel: {
        color: '#666',
        fontSize: 14,
    },
    statDivider: {
        width: 1,
        height: 40,
        backgroundColor: '#333',
    },
    editProfileButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#111',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 24,
        gap: 8,
        borderWidth: 1,
        borderColor: '#333',
    },
    editProfileText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    photosSection: {
        padding: 20,
    },
    photosSectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        gap: 8,
    },
    photosSectionTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    photosGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 2,
    },
    gridPhoto: {
        width: PHOTO_SIZE,
        height: PHOTO_SIZE,
    },
});

