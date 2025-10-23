import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Upload() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [uploading, setUploading] = useState(false);
    const router = useRouter();

    const requestPermissions = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission Denied', 'Sorry, we need camera roll permissions to upload photos!');
            return false;
        }
        return true;
    };

    const pickImage = async () => {
        const hasPermission = await requestPermissions();
        if (!hasPermission) return;

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.8,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
        }
    };

    const takePhoto = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission Denied', 'Sorry, we need camera permissions to take photos!');
            return;
        }

        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.8,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
        }
    };

    const uploadPhoto = async () => {
        if (!selectedImage) return;

        setUploading(true);
        
        // Simulate upload
        setTimeout(() => {
            setUploading(false);
            Alert.alert('Success', 'Photo uploaded successfully!', [
                {
                    text: 'OK',
                    onPress: () => {
                        setSelectedImage(null);
                        router.push('/(tabs)');
                    }
                }
            ]);
        }, 2000);
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            {selectedImage ? (
                <View style={styles.previewContainer}>
                    <Image source={{ uri: selectedImage }} style={styles.preview} />
                    <View style={styles.actionButtons}>
                        <TouchableOpacity
                            style={[styles.button, styles.cancelButton]}
                            onPress={() => setSelectedImage(null)}
                            disabled={uploading}
                        >
                            <Ionicons name="close-circle" size={24} color="#fff" />
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, styles.uploadButton]}
                            onPress={uploadPhoto}
                            disabled={uploading}
                        >
                            <Ionicons name="cloud-upload" size={24} color="#fff" />
                            <Text style={styles.buttonText}>
                                {uploading ? 'Uploading...' : 'Upload'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <View style={styles.optionsContainer}>
                    <View style={styles.header}>
                        <Ionicons name="camera" size={64} color="#fff" />
                        <Text style={styles.title}>Share a Photo</Text>
                        <Text style={styles.subtitle}>Choose how you'd like to add a photo</Text>
                    </View>

                    <TouchableOpacity style={styles.optionButton} onPress={takePhoto}>
                        <View style={styles.optionIcon}>
                            <Ionicons name="camera-outline" size={32} color="#fff" />
                        </View>
                        <View style={styles.optionTextContainer}>
                            <Text style={styles.optionTitle}>Take Photo</Text>
                            <Text style={styles.optionSubtitle}>Use your camera to capture a moment</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={24} color="#666" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton} onPress={pickImage}>
                        <View style={styles.optionIcon}>
                            <Ionicons name="images-outline" size={32} color="#fff" />
                        </View>
                        <View style={styles.optionTextContainer}>
                            <Text style={styles.optionTitle}>Choose from Gallery</Text>
                            <Text style={styles.optionSubtitle}>Select a photo from your library</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={24} color="#666" />
                    </TouchableOpacity>
                </View>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    content: {
        flexGrow: 1,
    },
    previewContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    preview: {
        width: '100%',
        aspectRatio: 1,
        borderRadius: 12,
        marginBottom: 20,
    },
    actionButtons: {
        flexDirection: 'row',
        gap: 12,
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        borderRadius: 12,
        gap: 8,
    },
    cancelButton: {
        backgroundColor: '#333',
    },
    uploadButton: {
        backgroundColor: '#0a84ff',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    optionsContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    header: {
        alignItems: 'center',
        marginBottom: 40,
    },
    title: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 16,
    },
    subtitle: {
        color: '#666',
        fontSize: 16,
        marginTop: 8,
        textAlign: 'center',
    },
    optionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#111',
        padding: 20,
        borderRadius: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#222',
    },
    optionIcon: {
        width: 60,
        height: 60,
        backgroundColor: '#222',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
    },
    optionTextContainer: {
        flex: 1,
    },
    optionTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 4,
    },
    optionSubtitle: {
        color: '#666',
        fontSize: 14,
    },
});

