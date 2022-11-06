import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Nike Slim shirt',
      slug: 'Nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg', //679px * 829px
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '2',
      name: 'Adidas Slim shirt',
      slug: 'adidas-slim-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 150,
      countInStock: 0,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '3',
      name: 'Adidas fit shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/images/p3.jpg',
      price: 140,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '4',
      name: 'Adidas fit pantss',
      slug: 'adidas-fit-pant',
      category: 'Shirts',
      image: '/images/p4.jpg',
      price: 20,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
};

export default data;
