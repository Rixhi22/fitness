# Delta Fitness React App

This is a React conversion of the Delta Fitness HTML website. The app includes all the original functionality with modern React components and state management.

## Features

- **Responsive Design**: Mobile-first responsive design that works on all devices
- **React Forms**: Converted HTML forms to React components with state management
- **Component Architecture**: Modular React components for easy maintenance
- **Modern UI**: Clean, modern interface with smooth animations
- **Form Validation**: Built-in form validation and user feedback

## Forms Converted

1. **Enquiry Form**: For gym membership inquiries
   - Name, Phone, Email, Interest, Preferred Time, Message
   - Form validation and success feedback
   
2. **Feedback Form**: For customer feedback
   - Name, Phone (optional), Feedback message
   - Form validation and success feedback

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

To create a production build:

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.js       # Navigation header
│   ├── Hero.js         # Hero section
│   ├── Hours.js        # Operating hours
│   ├── EnquiryForm.js  # Main enquiry form (converted)
│   ├── Packages.js     # Membership packages
│   ├── Offers.js       # Special offers
│   ├── Gallery.js      # Photo gallery
│   ├── Trainers.js     # Trainer information
│   ├── Reviews.js      # Customer reviews
│   ├── Contact.js      # Contact information
│   ├── FeedbackForm.js # Feedback form (converted)
│   ├── Footer.js       # Footer section
│   └── Toast.js        # Success message component
├── App.js              # Main app component
├── App.css             # Main styles
├── index.js            # App entry point
└── index.css           # Global styles
```

## Form Features

### EnquiryForm Component
- **State Management**: Uses React useState for form data
- **Form Validation**: Required fields and pattern validation
- **User Feedback**: Success messages via Toast component
- **Form Reset**: Automatically resets after successful submission

### FeedbackForm Component
- **Simple Interface**: Clean, focused feedback collection
- **Optional Fields**: Phone number is optional
- **Success Handling**: Integrated with main app toast system

## Styling

The app uses CSS custom properties (variables) for consistent theming:
- Primary colors: Dark theme with red accents
- Responsive grid system
- Mobile-first approach
- Smooth transitions and hover effects

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design for all screen sizes

## Development

The app is built with:
- React 18
- Functional components with hooks
- CSS custom properties
- Responsive design principles

## License

This project is for Delta Fitness. All rights reserved. 