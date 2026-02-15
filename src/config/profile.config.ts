// src/config/profile.config.ts
export const profileConfig = {
  name: 'John Smith',
  title: 'Mortgage Loan Officer',
  credentials: 'NMLS #123456',
  photo: '/images/profile.png',
  
  contact: {
    phone: '+15551234567',
    whatsapp: '15551234567', // No + or formatting
    email: 'john.smith@example.com',
  },
  
  social: {
    facebook: 'https://facebook.com/johnsmithmortgage',
    instagram: 'https://instagram.com/johnsmithmortgage',
    tiktok: 'https://tiktok.com/@johnsmithmortgage',
    linkedin: 'https://linkedin.com/in/johnsmith',
  },
  
  bio: {
    short: 'Expert mortgage guidance with 10+ years experience helping families achieve homeownership.',
    long: `Full professional bio here...`,
  },
  
  credentials_list: [
    'NMLS Licensed Loan Officer #123456',
    'Certified Mortgage Planning Specialist',
    'Member, National Association of Mortgage Brokers',
  ],
  
  regionsServed: ['nj', 'ny', 'pa'],
}
