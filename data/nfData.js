import { Sprout, Users, Leaf, BarChart3, Mail, Phone, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export const services = [
    {
        title: "Farmer Registration",
        desc: "Join our network of dedicated farmers and gain access to resources, training, and market opportunities.",
        icon: Users,
        image: "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?q=80&w=600&auto=format&fit=crop"
    },
    {
        title: "Crop Consultancy",
        desc: "Connect with a community of peers who value natural, sustainable farming practices.",
        icon: Sprout,
        image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?q=80&w=600&auto=format&fit=crop"
    },
    {
        title: "Dried/Leafy Option",
        desc: "Explore our platform for users in upload their agricultural produce demands and requirements.",
        icon: Leaf,
        image: "https://images.unsplash.com/photo-1536147116438-62679a5e01f2?q=80&w=600&auto=format&fit=crop"
    },
    {
        title: "Market Analytics",
        desc: "Real-time market insights and demand forecasting to help farmers make informed decisions.",
        icon: BarChart3,
        image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=600&auto=format&fit=crop"
    }
];

export const impactStats = [
    { value: "500+", label: "Registered Farmers", sub: "Growers joined our network" },
    { value: "1,000+", label: "Products Listed", sub: "Quality agricultural products" },
    { value: "2,500+", label: "Demand Entries", sub: "Market demand requests processed" },
    { value: "95%", label: "Success Rate", sub: "Successful crop yield improvement" }
];
