import React, { useState } from 'react';
import { Box, Button, Typography, Card, CardContent, CardActions, CardMedia, AppBar, Toolbar, IconButton, Badge, Grid } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import axios from 'axios';

const filterOptions = {
        ShowAll: [
          {
            name: 'Flowering Hormone Flowers Booster (5gms)',
            rating: 4.75,
            price: 10,
            description: 'This is an image of flowers feed with Flowering Hormone Flowers Booster.',
            category: 'Manures',
            image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/11/AnyConv.com__Flowers-300x300-1.webp?resize=300%2C300&ssl=1'
          },
          {
            name: 'Coco Peat (500gm, Buy 1 Get 1 free)',
            rating: 5.00,
            price: 99,
            description: 'This is an image of finest brown color powdered Coco Peat kept against light color background. Finest Coco Peat Soil.',
            category: 'Manures',
            image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/06/Coco-Peat-500gm-1.jpg?w=300&ssl=1'
          },
          {
            name: 'Plant Growth Promoter (5 gms for 5 plants)',
            rating: 5.00,
            price: 19,
            description: 'This is an image of some leafy vegetables grown with the help of Plant Growth Promoter.',
            category: 'Manures',
            image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2022/10/Plant-Growth-Promoter.webp?resize=300%2C300&ssl=1'
          },
          {
            name: 'Organic Plant Food Tablet (3 Tablets)',
            rating: 5.00,
            price: 14,
            description: 'Organic Plant Food Tablet for enhancing plant growth.',
            category: 'Manures',
            image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2022/01/Untitled-design-91.jpg?resize=300%2C300&ssl=1'
          },
          {
            name: 'Vermi Compost (500gm, Buy 1 Get 1 free)',
            rating: 4.93,
            price: 94,
            originalPrice: 161,
            discount: '41%',
            description: 'Finest Vermi compost. Finest powder of Vermicompost.',
            category: 'Manures',
            image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/06/Vermi-Compost-500-gms.jpg?resize=300%2C300&ssl=1'
          },
          {
            name: 'DAP (Phosphate) Granules (5gm)',
            rating: 5.00,
            price: 9,
            description: 'Small circle shaped DAP granules in a white spoon.',
            category: 'Manures',
            image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/11/AnyConv.com__DAP-Granules-300x300-1.webp?resize=300%2C300&ssl=1'
          },
          {
            name: 'Magic Seaweed (20gms)',
            rating: 4.90,
            price: 14,
            description: 'Magic Seaweed kept on sand against a seashore.',
            category: 'Manures',
            image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/06/Magic-Sea-Weed-20gms.jpg?resize=300%2C300&ssl=1'
          },
          {
            name: 'Neem Cake Powder (250gms)',
            rating: 4.83,
            price: 47,
            originalPrice: 67,
            discount: '30%',
            description: 'This is an image of finest Neem Cake Powder placed against white background.',
            category: 'Manures',
            image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/06/Neem-Cake-Powder-250gms-1.jpg?w=300&ssl=1'
          },
          {
            name: 'Rooting Hormone (5gms)',
            rating: 4.93,
            price: 14,
            originalPrice: 19,
            discount: '25%',
            description: 'This is an image of a hand holding Rooting Hormone granules.',
            category: 'Manures',
            image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/10/AnyConv.com__Rooting-Hormone-300x300-1-1.webp?resize=300%2C300&ssl=1'
          },
          {
            name: 'Leca Clay Balls (250gms)',
            rating: 5.00,
            price: 49,
            originalPrice: 99,
            discount: '51%',
            description: 'Best Leca Clay Balls in the pots.',
            category: 'Manures',
            image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/08/Plant-in-Leca-Clay-Balls.jpg?resize=300%2C300&ssl=1'
          },
          {
            name: 'Cow Dung Powder (100gms)',
            rating: 4.93,
            price: 19,
            originalPrice: 27,
            discount: '29%',
            description: 'Finest cow dung powder.',
            category: 'Manures',
            image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/06/Cow-Dung-Powder-100gms.jpg?w=300&ssl=1'
          },
          {
            name: 'Epsom Salt (250gms)',
            rating: 5.00,
            price: 43,
            originalPrice: 48,
            discount: '10%',
            description: 'This is an image of white color Epsom Salt for plants kept in soil between small green plants.',
            category: 'Manures',
            image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/06/Epsom-Salt-250gms-1.jpg?resize=300%2C300&ssl=1'
          },
          {
            name: 'Charcoal Activated Farmer (100gm)',
            rating: 5.00,
            price: 19,
            originalPrice: 29,
            discount: '33%',
            description: 'This is an image of finest Charcoal Activated Farmer.',
            category: 'Manures',
            image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/09/Charcoal-2.png?resize=300%2C300&ssl=1'
          },
          {
            name: 'Vermiculite for Gardening (100gms)',
            rating: 5.00,
            price: 19,
            description: 'A very useful Vermiculite falling out of seedling tray.',
            category: 'Manures',
            image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2022/03/Vermiculite-with-green-pot.webp?resize=300%2C300&ssl=1'
          },
          {
            name: 'Mustard Oil Cake Powder (200gms)',
            rating: 5.00,
            price: 37,
            originalPrice: 66,
            discount: '43%',
            description: 'This is an image of finest Mustard Oil Cake Powder kept against grey color background.',
            category: 'Manures',
            image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/11/AnyConv.com__Mustard-Oil-Seeds-Cake-Powder-300x300-1.webp?resize=300%2C300&ssl=1'
          },
          {
            name: 'Coarse River Sand (0.5kg)',
            rating: 5.00,
            price: 49,
            description: 'This is an image of Coarse River Sand.',
            category: 'Manures',
            image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/10/River-Sand-_2.jpg?resize=300%2C300&ssl=1'
          },
          {
            name: 'Neem Oil (30ml)',
            rating: 4.92,
            price: 37,
            originalPrice: 56,
            discount: '34%',
            description: 'A bottle of 30 ml neem oil kept against a red background.',
            category: 'Manures',
            image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/06/AnyConv.com__Neem-Oil-30ml-300x300-1.webp?w=600&ssl=1'
          },
          {
            name: 'Sphagnum Peat Moss (50gms)',
            rating: 4.93,
            price: 47,
            originalPrice: 71,
            discount: '35%',
            description: 'Finest Sphagnum Peat Moss on a white surface.',
            category: 'Manures',
            image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2022/02/Sphagnum-Peat-Moss.webp?w=600&ssl=1'
          },
          {
            name: 'Rose Mix (250gms)',
            rating: 4.93,
            price: 47,
            originalPrice: 71,
            discount: '35%',
            description: 'This is an image of beautiful red rose blooming in a garden with green leaves in background grown using Rose mix.',
            category: 'Manures',
            image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/09/Rose-Mix_2-.jpg?resize=300%2C300&ssl=1'
          },
          {
            name: 'Perlite (100 gms)',
            rating: 4.93,
            price: 47,
            description: 'Finest white colored powder of perlite.',
            category: 'Manures',
            image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/06/Perlite-5-gms-1.jpg?w=300&ssl=1'
          },
          {
            name: 'Epsom Salt for Plants (20gms)',
            rating: 4.93,
            price: 11,
            originalPrice: 14,
            discount: '20%',
            description: 'This is an image of white color Epsom salt for plants kept on top of soil with small plants around it.',
            category: 'Manures',
            image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/11/AnyConv.com__Epsom-Salt-250gms-300x300-1.webp?w=600&ssl=1'
          },
          {
            name: 'Red Soil for Gardening (1kg)',
            rating: 5.00,
            price: 99,
            description: 'Red soil in a farm.',
            category: 'Manures',
            image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/11/AnyConv.com__Red-Gardening-Soil_2-300x300-1.webp?resize=300%2C300&ssl=1'
          },
          {
            name: 'Vermi Compost (100gms, Buy 1 Get 1 free)',
            rating: 5.00,
            price: 38,
            originalPrice: 43,
            discount: '11%',
            description: 'Finest powder of Vermi compost.',
            category: 'Manures',
            image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/06/Vermi-Compost-100-gms.jpg?resize=600%2C600&ssl=1'
          },
          {
            name: 'Coconut Husks (100gm)',
            rating: 5.00,
            price: 28,
            description: 'This is an image of a heap of Coconut Husks.',
            category: 'Manures',
            image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2022/12/Coconut-Husks-..webp?resize=300%2C300&ssl=1'
          },

        ],
      
  Aeration: [
    {
      name: 'Vermiculite for Gardening (100gms)',
      rating: 5,
      price: 19,
      description: 'Finest white colored powder of perlite.',
      category: 'Manures',
      image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2022/03/Vermiculite-with-green-pot.webp?resize=300%2C300&ssl=1'
    },
    {
      name: 'Perlite (100 gms)',
      rating: 4.93,
      price: 47,
      description: 'Finest powder of Vermi compost.',
      category: 'Manures',
      image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/06/Perlite-100-gms-1.jpg?w=300&ssl=1'
    },
    {
      name: 'Coco Peat (500gm, Buy 1 Get 1 free)',
      rating: 5,
      price: 99,
      originalPrice: 99,
      discount: '41%',
      description: 'Finest Vermi compost.',
      category: 'Manures',
      image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/06/Coco-Peat-500gm-1.jpg?w=300&ssl=1'
    },
    {
      name: 'Vermi Compost (500gm, Buy 1 Get 1 free)',
      rating: 4.93,
      price: 94,
      originalPrice: 161,
      discount: '33%',
      description: 'Finest powder of Vermicompost.',
      category: 'Manures',
      image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/06/Vermi-Compost-500-gms.jpg?resize=300%2C300&ssl=1'
    },
    {
      name: 'Charcoal Activated Farmer (100gm)',
      rating: 5,
      price: 19,
      originalPrice: 29,
      discount: '34%',
      description: 'Finest Charcoal Activated Farmer.',
      category: 'Manures',
      image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/09/Charcoal-2.png?resize=300%2C300&ssl=1'
    },
    {
      name: 'Vermiculite for Gardening (100gms)',
      rating: 5,
      price: 19,
      description: 'A very useful Vermiculite falling out of seedling tray.',
      category: 'Manures',
      image: 'https://example.com/image6.jpg'
    },
    {
      name: 'Perlite (100 gms)',
      rating: 4.93,
      price: 47,
      description: 'Finest white colored powder of perlite.',
      category: 'Manures',
      image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/06/Perlite-100-gms-1.jpg?w=300&ssl=1'
    },
    {
      name: 'Vermi Compost (100gms, Buy 1 Get 1 free)',
      rating: 5,
      price: 38,
      originalPrice: 43,
      discount: '11%',
      description: 'Finest powder of Vermicompost.',
      category: 'Manures',
      image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/06/Vermi-Compost-100-gms-1.jpg?w=300&ssl=1'
    },
    {
      name: 'Coconut Husks (100gm)',
      rating: 5,
      price: 28,
      description: 'Finest potting mix kept in the palms of hand.',
      category: 'Manures',
      image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2022/12/Coconut-Husks-..webp?resize=300%2C300&ssl=1'
    },
    {
      name: 'Potting Mix for Plants (2.150kg)',
      rating: 4.92,
      price: 150,
      description: 'Finest potting mix kept in the palms of hand.',
      category: 'Manures',
      image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/06/AnyConv.com__1713262047-300x300-1.webp?resize=300%2C300&ssl=1'
    },
    {
      name: 'Wood Saw Dust- Organic Natural (100gms)',
      rating: 5,
      price: 19,
      description: 'Finest powder of Wood saw dust.',
      category: 'Manures',
      image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/09/Saw-Dust-1.png?resize=300%2C300&ssl=1'
    },
    {
      name: 'Coco Peat (100gm, Buy 1 Get 1 free)',
      rating: 5,
      price: 38,
      originalPrice: 38,
      discount: '17%',
      description: 'Finest Coco Peat Soil.',
      category: 'Manures',
      image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/06/Coco-Peat-500gm-1.jpg?w=300&ssl=1'
    },
  ],
  Fertilizers: [
    {
      name: 'Flowering Hormone Flowers Booster (5gms)',
      rating: 4.75,
      price: 10,
      description: 'This is an image of flowers feed with Flowering Hormone Flowers Booster.',
      category: 'Manures',
      image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/11/AnyConv.com__Flowers-300x300-1.webp?resize=300%2C300&ssl=1'
    },
    {
      name: 'Plant Growth Promoter (5 gms for 5 plants)',
      rating: 5.00,
      price: 19,
      description: 'This is an image of some leafy vegetables grown with the help of Plant Growth Promoter.',
      category: 'Manures',
      image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2022/10/Plant-Growth-Promoter.webp?resize=300%2C300&ssl=1'
    },
    {
      name: 'Organic Plant Food Tablet (3 Tablets)',
      rating: 5.00,
      price: 14,
      description: 'Organic Plant Food Tablet for enhancing plant growth.',
      category: 'Manures',
      image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2022/01/Untitled-design-91.jpg?resize=300%2C300&ssl=1'
    },
    {
      name: 'Vermi Compost (500gm, Buy 1 Get 1 free)',
      rating: 4.93,
      price: 94,
      originalPrice: 161,
      discount: '41%',
      description: 'Finest Vermi compost. Finest powder of Vermicompost.',
      category: 'Manures',
      image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/06/Vermi-Compost-500-gms.jpg?resize=300%2C300&ssl=1'
    },
    {
      name: 'DAP (Phosphate) Granules (5gm)',
      rating: 5.00,
      price: 9,
      description: 'Small circle shaped DAP granules in a white spoon.',
      category: 'Manures',
      image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/11/AnyConv.com__DAP-Granules-300x300-1.webp?resize=300%2C300&ssl=1'
    },
    {
      name: 'Magic Seaweed (20gms)',
      rating: 4.90,
      price: 14,
      description: 'Magic Seaweed kept on sand against a seashore.',
      category: 'Manures',
      image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/06/Magic-Sea-Weed-20gms.jpg?resize=300%2C300&ssl=1'
    },
    {
      name: 'Neem Cake Powder (250gms)',
      rating: 4.83,
      price: 47,
      originalPrice: 67,
      discount: '30%',
      description: 'This is an image of finest Neem Cake Powder placed against white background.',
      category: 'Manures',
      image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/06/Neem-Cake-Powder-250gms-1.jpg?w=300&ssl=1'
    },
    {
      name: 'Rooting Hormone (5gms)',
      rating: 4.93,
      price: 14,
      originalPrice: 19,
      discount: '25%',
      description: 'This is an image of a hand holding Rooting Hormone granules.',
      category: 'Manures',
      image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/10/AnyConv.com__Rooting-Hormone-300x300-1-1.webp?resize=300%2C300&ssl=1'
    },
    {
      name: 'Cow Dung Powder (100gms)',
      rating: 4.93,
      price: 19,
      originalPrice: 27,
      discount: '29%',
      description: 'Finest cow dung powder.',
      category: 'Manures',
      image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/06/Cow-Dung-Powder-100gms.jpg?w=300&ssl=1'
    },
    {
      name: 'Epsom Salt (250gms)',
      rating: 5.00,
      price: 43,
      originalPrice: 48,
      discount: '10%',
      description: 'This is an image of white color Epsom Salt for plants kept in soil between small green plants.',
      category: 'Manures',
      image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/06/Epsom-Salt-250gms-1.jpg?resize=300%2C300&ssl=1'
    },
    {
      name: 'Charcoal Activated Farmer (100gm)',
      rating: 5.00,
      price: 19,
      originalPrice: 29,
      discount: '33%',
      description: 'This is an image of finest Charcoal Activated Farmer.',
      category: 'Manures',
      image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/09/Charcoal-2.png?resize=300%2C300&ssl=1'
    },
    {
      name: 'Vermiculite for Gardening (100gms)',
      rating: 5.00,
      price: 19,
      description: 'A very useful Vermiculite falling out of seedling tray.',
      category: 'Manures',
      image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2022/03/Vermiculite-with-green-pot.webp?resize=300%2C300&ssl=1'
    }
  ],  
  GardenSoil: [
    {
      name: 'Coco Peat (500gm, Buy 1 Get 1 free)',
      rating: 5,
      price: 99,
      description: 'This is an image of finest brown color powdered Coco Peat kept against light color background. Finest Coco Peat Soil.',
      category: 'Manures',
      image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/06/Coco-Peat-500gm-1.jpg?w=300&ssl=1'
    },
    {
      name: 'Vermi Compost (500gm, Buy 1 Get 1 free)',
      rating: 4.93,
      price: 94,
      originalPrice: 161,
      discount: '41%',
      description: 'Finest Vermi compost. Finest powder of Vermicompost.',
      category: 'Manures',
      image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/06/Vermi-Compost-500-gms.jpg?resize=300%2C300&ssl=1'
    },
    {
      name: 'DAP (Phosphate) Granules (5gm)',
      rating: 5,
      price: 9,
      description: 'Small circle shaped DAP granules in a white spoon.',
      category: 'Manures',
      image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/11/AnyConv.com__DAP-Granules-300x300-1.webp?resize=300%2C300&ssl=1'
    },
    {
      name: 'Neem Cake Powder (250gms)',
      rating: 4.83,
      price: 47,
      originalPrice: 67,
      discount: '30%',
      description: 'This is an image of finest Neem Cake Powder placed against white background.',
      category: 'Manures',
      image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/06/Neem-Cake-Powder-250gms-1.jpg?w=300&ssl=1'
    },
    {
      name: 'Cow Dung Powder (100gms)',
      rating: 4.93,
      price: 19,
      originalPrice: 27,
      discount: '29%',
      description: 'Finest cow dung powder.',
      category: 'Manures',
      image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/06/Cow-Dung-Powder-100gms.jpg?w=300&ssl=1'
    },
    {
      name: 'Epsom Salt (250gms)',
      rating: 5,
      price: 43,
      originalPrice: 48,
      discount: '10%',
      description: 'This is an image of white color Epsom Salt for plants kept in soil between small green plants.',
      category: 'Manures',
      image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/06/Epsom-Salt-250gms-1.jpg?resize=300%2C300&ssl=1'
    },
    {
      name: 'Charcoal Activated Farmer (100gm)',
      rating: 5,
      price: 19,
      originalPrice: 29,
      discount: '33%',
      description: 'This is an image of finest Charcoal Activated Farmer.',
      category: 'Manures',
      image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/09/Charcoal-2.png?resize=300%2C300&ssl=1'
    },
    {
      name: 'Vermiculite for Gardening (100gms)',
      rating: 5,
      price: 19,
      description: 'A very useful Vermiculite falling out of seedling tray.',
      category: 'Manures',
      image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2022/03/Vermiculite-with-green-pot.webp?resize=300%2C300&ssl=1'
    },
    {
      name: 'Mustard Oil Cake Powder (200gms)',
      rating: 5,
      price: 37,
      originalPrice: 66,
      discount: '43%',
      description: 'This is an image of finest Mustard Oil Cake Powder kept against grey color background.',
      category: 'Manures',
      image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/11/AnyConv.com__Mustard-Oil-Seeds-Cake-Powder-300x300-1.webp?resize=300%2C300&ssl=1'
    },
    {
      name: 'Coarse River Sand (0.5kg)',
      rating: 5,
      price: 49,
      description: 'This is an image of Coarse River Sand.',
      category: 'Manures',
      image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/10/River-Sand-_2.jpg?resize=300%2C300&ssl=1'
    },
    {
      name: 'Sphagnum Peat Moss (50gms)',
      rating: 4.93,
      price: 47,
      originalPrice: 71,
      discount: '35%',
      description: 'Finest Sphagnum Peat Moss on a white surface.',
      category: 'Manures',
      image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2022/02/Sphagnum-Peat-Moss.webp?w=600&ssl=1'
    },
    {
      name: 'Epsom Salt for Plants (20gms)',
      rating: 4.93,
      price: 11,
      originalPrice: 14,
      discount: '20%',
      description: 'This is an image of white color Epsom salt for plants kept on top of soil with small plants around it.',
      category: 'Manures',
      image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/11/AnyConv.com__Epsom-Salt-250gms-300x300-1.webp?w=600&ssl=1'
    }
  ],
//   'Growth Promoting Hormones:[
       
//   ],
};

const FilterAndDisplay = ({ cart = [] }) => {
  const [selectedFilter, setSelectedFilter] = useState('ShowAll');

  const addToCart = async (item) => {
    const cartItem = {
      name: item.name,
      description: item.description,
      image: item.image,
      rating: item.rating,
      price: item.price,
      category: item.category
    };

    try {
      await axios.post('http://localhost:3003/cartItems', cartItem);
      // Optionally fetch updated cart here if needed
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" component={Link} to="/" color="inherit" aria-label="home">
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Manures
          </Typography>
          <IconButton component={Link} to="/cart" color="inherit">
            <Badge badgeContent={cart.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* <Toolbar /> To push content below the AppBar */}
      <Box mt={8}> {/* Adjust this value if needed */}
        <Typography variant="h6" gutterBottom>
          <br />
          Filter by Category
        </Typography>
        <Box display="flex" mb={2} flexWrap="wrap">
          {Object.keys(filterOptions).map((filter) => (
            <Button
              key={filter}
              variant={selectedFilter === filter ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => setSelectedFilter(filter)}
              sx={{ mr: 1, mb: 1 }}
            >
              {filter}
            </Button>
          ))}
        </Box>
        <Grid container spacing={4}>
          {filterOptions[selectedFilter].map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}> {/* Adjust size as needed */}
              <Card>
                {item.image && (
                  <CardMedia
                    component="img"
                    height="350px" // Adjust height to fit content
                    image={item.image}
                    alt={item.name}
                    sx={{ objectFit: 'cover', width: '100%' }} // Ensure image covers the container
                  />
                )}
                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Rating: {item.rating}
                  </Typography>
                  <Typography variant="body1">Price: ₹{item.price}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Category: {item.category}
                  </Typography>
                  <Typography variant="body2">{item.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={() => addToCart(item)}>Add to Cart</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FilterAndDisplay;
