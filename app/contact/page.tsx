import { Metadata } from 'next';
import ContactPage from '@/contact/ContactPage';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch',
};

export default function Contact() {
  return <ContactPage />;
}
