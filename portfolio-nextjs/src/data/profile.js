export const profileConfig = {
  // Select the profile image to display.
  // Options: 'profile-1.jpg', 'profile-2.jpg', 'profile-3.jpg', 'profile-4.jpg'
  selectedImage: 'profile-1.jpg',
  
  // Base path for profile images
  imagePath: '/images/about/',
  
  // Helper to get the full path
  get profileImage() {
    return `${this.imagePath}${this.selectedImage}`;
  }
};
