// src/config/profile.config.ts
export const profileConfig = {
  name: 'Joseph Cherian',
  title: 'Mortgage Loan Officer',
  credentials: 'Licensed Loan Officer | NMLS #1420671',
  photo: '/images/profile-v2.png',
  
  contact: {
    phone: '+1 (973) 634-6093',
    whatsapp: '19736346093', // No + or formatting
    email: 'cheriantjoseph@gmail.com',
  },

  company: {
    name: 'Go Rascal Mortgage',
    nmls: 'NMLS #2072896',
    officeAddress: '',
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
    'Licensed Loan Officer | NMLS #1420671',
    'Go Rascal Mortgage | NMLS #2072896',
    'Certified Mortgage Planning Specialist',
    'Member, National Association of Mortgage Brokers',
  ],
  
  regionsServed: ['nj', 'ny', 'pa'],
}
