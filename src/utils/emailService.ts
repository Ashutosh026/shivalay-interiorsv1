import emailjs from '@emailjs/browser';

// Validate environment variables are set
const requiredEnvVars = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
};

// Check if any required env vars are missing
const missingEnvVars = Object.entries(requiredEnvVars)
  .filter(([_, value]) => !value || value === 'YOUR_SERVICE_ID' || value === 'YOUR_TEMPLATE_ID' || value === 'YOUR_PUBLIC_KEY')
  .map(([key]) => key);

if (missingEnvVars.length > 0) {
  console.error(`Missing required EmailJS configuration: ${missingEnvVars.join(', ')}`);
}

// Initialize EmailJS with public key
emailjs.init(requiredEnvVars.publicKey);

export const sendConsultationEmail = async (formData: {
  name: string;
  email: string;
  phonenumber: number;
  service: string;
  message: string;
}) => {
  if (missingEnvVars.length > 0) {
    throw new Error('EmailJS is not properly configured. Please set up your credentials.');
  }

  try {
    const response = await emailjs.send(
      requiredEnvVars.serviceId,
      requiredEnvVars.templateId,
      {
        to_email: 'shivalayinteriors@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        from_phonenumber: formData.phonenumber,
        service: formData.service,
        message: formData.message,
      }
    );
    return response;
  } catch (error) {
    console.error('Email sending failed:', error);
    throw new Error('Failed to send email. Please try again later.');
  }
};