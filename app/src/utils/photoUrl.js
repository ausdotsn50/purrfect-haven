const DEFAULT_PLACEHOLDER = 'https://placehold.co/400x400?text=No+Photo';

// /uploads is proxied to Express (vite.config.js in dev, vercel.json in prod)
export function getPhotoUrl(filePath, fallback = DEFAULT_PLACEHOLDER) {
  if (!filePath) return fallback;
  return `/${filePath}`;
}

export function getPetPhotoUrl(filePath, petName) {
  if (!filePath && !petName) return 'https://placehold.co/200x200?text=No+Photo';
  if (petName) {
    const fileName = `${petName.charAt(0).toLowerCase()}${petName.slice(1)}-1.jpg`;
    return getPhotoUrl(`uploads/pets/${fileName}`);
  }
  return getPhotoUrl(filePath);
}

export function getStoryPhotoUrl(filePath, petName) {
  if (petName) {
    const fileName = `${petName.charAt(0).toLowerCase()}${petName.slice(1)}-1.jpg`;
    return getPhotoUrl(`uploads/stories/${fileName}`, null);
  }
  return getPhotoUrl(filePath, null);
}