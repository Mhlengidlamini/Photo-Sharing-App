# PhotoSharing App

A modern, Instagram-like photo sharing mobile application built with React Native and Expo Router.

## Features

### 📸 Photo Management
- **Photo Feed**: Beautiful grid layout displaying photos with like counts
- **Upload Photos**: Take photos with camera or select from gallery
- **Photo Details**: View photos with likes, comments, and user information
- **Image Editing**: Square aspect ratio editing for consistent feed appearance

### 👤 User Profile
- Profile page with user stats (photos, followers, following)
- Personal photo grid
- Edit profile functionality
- User bio and avatar display

### 🎨 Modern UI/UX
- Dark theme interface
- Smooth navigation with bottom tab bar
- Instagram-inspired design
- Responsive layout
- Pull-to-refresh on feed

### 📱 Social Features
- Like and bookmark photos
- Comment system
- Share photos
- User interactions
- Location tagging

## Tech Stack

- **React Native** 0.81.5
- **Expo** ~54.0.18
- **Expo Router** ~6.0.13 (File-based routing)
- **TypeScript** ~5.9.2
- **Expo Image Picker** ~16.0.2
- **Expo Vector Icons** ^14.0.0

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo Go app on your mobile device (for testing)
- Android Studio or Xcode (for emulator)

### Installation

1. Clone the repository
\`\`\`bash
git clone <repository-url>
cd PhotoSharing
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Start the development server
\`\`\`bash
npx expo start
\`\`\`

### Running on Devices

#### Android Emulator
\`\`\`bash
npx expo run:android
\`\`\`

#### iOS Simulator (Mac only)
\`\`\`bash
npx expo run:ios
\`\`\`

#### Physical Device
1. Install Expo Go from App Store or Google Play
2. Scan the QR code shown in your terminal
3. The app will load automatically

## Project Structure

\`\`\`
PhotoSharing/
├── app/
│   ├── (tabs)/              # Tab navigation screens
│   │   ├── _layout.tsx      # Tab navigator configuration
│   │   ├── index.tsx        # Feed screen
│   │   ├── upload.tsx       # Photo upload screen
│   │   └── profile.tsx      # User profile screen
│   ├── photo/
│   │   └── [id].tsx         # Dynamic photo detail screen
│   └── _layout.tsx          # Root layout with Stack navigation
├── assets/                   # Images and icons
├── src/
│   └── components/          # Reusable components (if needed)
├── app.json                 # Expo configuration
├── package.json             # Dependencies
└── tsconfig.json            # TypeScript configuration
\`\`\`

## Permissions

The app requires the following permissions:

### iOS
- Camera access (NSCameraUsageDescription)
- Photo library access (NSPhotoLibraryUsageDescription)
- Save to photo library (NSPhotoLibraryAddUsageDescription)

### Android
- CAMERA
- READ_EXTERNAL_STORAGE
- WRITE_EXTERNAL_STORAGE
- READ_MEDIA_IMAGES

## Features Breakdown

### Feed Screen (`app/(tabs)/index.tsx`)
- 3-column grid layout
- Photo thumbnails with like counts
- Pull-to-refresh functionality
- Navigation to photo details

### Upload Screen (`app/(tabs)/upload.tsx`)
- Two upload options: Camera or Gallery
- Image preview before upload
- Square aspect ratio cropping
- Upload progress indication

### Profile Screen (`app/(tabs)/profile.tsx`)
- User avatar and bio
- Statistics (photos, followers, following)
- Personal photo grid
- Edit profile button

### Photo Detail (`app/photo/[id].tsx`)
- Full-size photo display
- Like, comment, share, and bookmark actions
- User information and caption
- Comments section
- Comment input

## Customization

### Theme Colors
The app uses a dark theme. To customize colors, edit the StyleSheet in each component:

- Background: `#000` (Black)
- Primary: `#0a84ff` (Blue)
- Text: `#fff` (White)
- Secondary text: `#666` (Gray)

### Sample Data
Currently, the app uses sample data from Picsum Photos API. In production, replace with your backend API:

1. Update API endpoints in each screen
2. Implement authentication
3. Add state management (Redux, Context API, etc.)
4. Connect to your database

## Next Steps

To make this a production-ready app:

1. **Backend Integration**
   - Set up a backend API (Node.js, Firebase, etc.)
   - Implement authentication (JWT, OAuth)
   - Add database (MongoDB, PostgreSQL, etc.)

2. **State Management**
   - Add Redux or Zustand for global state
   - Implement persistent storage (AsyncStorage)

3. **Additional Features**
   - Direct messaging
   - Stories
   - Video support
   - Advanced search
   - Notifications

4. **Performance**
   - Image optimization
   - Lazy loading
   - Caching strategies

5. **Testing**
   - Unit tests with Jest
   - E2E tests with Detox

## License

MIT License

## Credits

Built as a reference photo sharing application inspired by modern social media platforms.

