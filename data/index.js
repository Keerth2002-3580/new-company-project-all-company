
// Shared Data

export const mainNavLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/#about' },
    { label: 'Services', path: '/#services' },
    { label: 'News', path: '/#news' },
    { label: 'Contact', path: '/#contact' },
];

export const companies = [
    {
        id: 'farming',
        name: 'NF Farming',
        desc: 'Sustainable agricultural solutions for a greener tomorrow.',
        path: '/company/natural-farming',
        color: 'var(--color-farm-primary)',
        icon: 'leaf'
    },
    {
        id: 'products',
        name: 'Natural Plantation',
        desc: 'Holistic wellness solutions with natural and organic treatments.',
        path: '/company/natural-products',
        color: 'var(--color-prod-primary)',
        icon: 'bottle'
    },

];

export const mainStats = [
    { value: '1,800+', label: 'Company Employees' },
    { value: '71+', label: 'Global Branches' },
    { value: '6+', label: 'Years of Excellence' },
    { value: '20M+', label: 'Annual Revenue' },
];

export const products = [
    { id: 1, name: 'Organic Herbal Tea', price: 'LKR 1,500', oldPrice: '2,000', img: 'tea' },
    { id: 2, name: 'Pure Organic Honey', price: 'LKR 2,500', oldPrice: '3,200', img: 'honey' },
    { id: 3, name: 'Aloe Vera Gel', price: 'LKR 1,200', oldPrice: '1,500', img: 'aloe' },
    { id: 4, name: 'Bamboo Cutting Board', price: 'LKR 3,400', oldPrice: '4,000', img: 'board' },
];
