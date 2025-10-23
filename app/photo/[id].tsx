import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Share } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

// Sample photo data - in a real app, this would be fetched based on the ID
const photoData = {
    uri: 'https://picsum.photos/800/800?random=',
    user: 'john_doe',
    userAvatar: 'https://picsum.photos/100/100?random=user',
    likes: 1234,
    caption: 'Beautiful sunset captured during my evening walk 🌅✨ #photography #nature #sunset',
    location: 'San Francisco, CA',
    timestamp: '2 hours ago',
    comments: [
        { id: '1', user: 'jane_smith', text: 'Absolutely stunning! 😍', avatar: 'https://picsum.photos/100/100?random=user1' },
        { id: '2', user: 'mike_photos', text: 'What camera did you use?', avatar: 'https://picsum.photos/100/100?random=user2' },
        { id: '3', user: 'sarah_lens', text: 'This is amazing! 📸', avatar: 'https://picsum.photos/100/100?random=user3' },
    ],
};

export default function PhotoDetail() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const [liked, setLiked] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);

    const handleShare = async () => {
        try {
            await Share.share({
                message: `Check out this amazing photo! ${photoData.caption}`,
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <ScrollView style={styles.container}>
            {/* Photo */}
            <Image
                source={{ uri: `${photoData.uri}${id}` }}
                style={styles.photo}
                resizeMode="cover"
            />

            {/* Actions Bar */}
            <View style={styles.actionsBar}>
                <View style={styles.leftActions}>
                    <TouchableOpacity
                        style={styles.actionButton}
                        onPress={() => setLiked(!liked)}
                    >
                        <Ionicons
                            name={liked ? 'heart' : 'heart-outline'}
                            size={28}
                            color={liked ? '#ff3b30' : '#fff'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <Ionicons name="chatbubble-outline" size={26} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton} onPress={handleShare}>
                        <Ionicons name="paper-plane-outline" size={26} color="#fff" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.actionButton}
                    onPress={() => setBookmarked(!bookmarked)}
                >
                    <Ionicons
                        name={bookmarked ? 'bookmark' : 'bookmark-outline'}
                        size={26}
                        color="#fff"
                    />
                </TouchableOpacity>
            </View>

            {/* Likes Count */}
            <Text style={styles.likesText}>
                {liked ? photoData.likes + 1 : photoData.likes} likes
            </Text>

            {/* User Info & Caption */}
            <View style={styles.userSection}>
                <Image source={{ uri: photoData.userAvatar }} style={styles.userAvatar} />
                <View style={styles.userInfo}>
                    <View style={styles.captionContainer}>
                        <Text style={styles.username}>{photoData.user}</Text>
                        <Text style={styles.caption}> {photoData.caption}</Text>
                    </View>
                    <View style={styles.metaInfo}>
                        <Ionicons name="location-outline" size={14} color="#666" />
                        <Text style={styles.location}>{photoData.location}</Text>
                        <Text style={styles.dot}>•</Text>
                        <Text style={styles.timestamp}>{photoData.timestamp}</Text>
                    </View>
                </View>
            </View>

            {/* Comments Section */}
            <View style={styles.commentsSection}>
                <Text style={styles.commentsHeader}>Comments ({photoData.comments.length})</Text>
                {photoData.comments.map((comment) => (
                    <View key={comment.id} style={styles.commentItem}>
                        <Image source={{ uri: comment.avatar }} style={styles.commentAvatar} />
                        <View style={styles.commentContent}>
                            <Text style={styles.commentUsername}>{comment.user}</Text>
                            <Text style={styles.commentText}>{comment.text}</Text>
                        </View>
                    </View>
                ))}
            </View>

            {/* Comment Input */}
            <View style={styles.commentInputContainer}>
                <Image source={{ uri: photoData.userAvatar }} style={styles.commentInputAvatar} />
                <TouchableOpacity style={styles.commentInput}>
                    <Text style={styles.commentInputPlaceholder}>Add a comment...</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sendButton}>
                    <Ionicons name="send" size={20} color="#0a84ff" />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    photo: {
        width: '100%',
        aspectRatio: 1,
    },
    actionsBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    leftActions: {
        flexDirection: 'row',
        gap: 16,
    },
    actionButton: {
        padding: 4,
    },
    likesText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '600',
        paddingHorizontal: 16,
        marginBottom: 12,
    },
    userSection: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        marginBottom: 20,
    },
    userAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
    },
    userInfo: {
        flex: 1,
    },
    captionContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 6,
    },
    username: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '600',
    },
    caption: {
        color: '#fff',
        fontSize: 15,
    },
    metaInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    location: {
        color: '#666',
        fontSize: 13,
        marginLeft: 4,
    },
    dot: {
        color: '#666',
        fontSize: 13,
        marginHorizontal: 6,
    },
    timestamp: {
        color: '#666',
        fontSize: 13,
    },
    commentsSection: {
        paddingHorizontal: 16,
        paddingBottom: 20,
        borderTopWidth: 1,
        borderTopColor: '#222',
        paddingTop: 16,
    },
    commentsHeader: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 16,
    },
    commentItem: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    commentAvatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: 12,
    },
    commentContent: {
        flex: 1,
    },
    commentUsername: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 4,
    },
    commentText: {
        color: '#ccc',
        fontSize: 14,
    },
    commentInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderTopWidth: 1,
        borderTopColor: '#222',
        marginBottom: 20,
    },
    commentInputAvatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: 12,
    },
    commentInput: {
        flex: 1,
        backgroundColor: '#111',
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#333',
    },
    commentInputPlaceholder: {
        color: '#666',
        fontSize: 14,
    },
    sendButton: {
        marginLeft: 12,
        padding: 4,
    },
});

