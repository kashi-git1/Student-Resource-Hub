/**
 * Storage Configuration
 * 
 * IMPORTANT: This file is prepared for future AWS S3 integration.
 * DO NOT add AWS access keys, secret keys, IAM credentials, or credentials of any kind here.
 * The frontend should only construct public URLs or interact with a secure backend.
 */

export const STORAGE_CONFIG = {
  // Replace this with your actual S3 bucket URL when implementing AWS
  // e.g., 'https://your-actual-bucket-name.s3.amazonaws.com'
  BASE_URL: 'https://student-resource-hub-kashif-2026.s3.eu-north-1.amazonaws.com',
  
  // Planned S3 Bucket Structure
  PATHS: {
    NOTES: '/notes',
    PAST_PAPERS: '/past-papers',
    PROGRAMMING: '/programming',
    RESOURCES: '/resources'
  }
};

/**
 * Helper utility to consistently construct file URLs.
 * When AWS is integrated, this function will make it easy to swap URL generation logic
 * without touching individual UI components.
 */
export const getFileUrl = (folderPath: string, fileName: string): string => {
  return `${STORAGE_CONFIG.BASE_URL}${folderPath}/${fileName}`;
};
