const express = require('express');

const scrapingRoutes = express.Router();
const mockedData = [
  {
    title: '1 Banana',
    price: '$5',
    imgUrl: '',
    linkUrl: '',
  },
  {
    title: '2 Apple',
    price: '$5',
    imgUrl: 'https://static.tvmaze.com/uploads/images/original_untouched/99/249943.jpg',
    linkUrl: 'https://static.tvmaze.com/uploads/images/original_untouched/99/249943.jpg',
  },
  {
    title: '3 Chocolate',
    price: '$10',
    imgUrl: 'https://images.pexels.com/photos/4110101/pexels-photo-4110101.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    linkUrl: 'https://images.pexels.com/photos/4110101/pexels-photo-4110101.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  }
]

scrapingRoutes.post(
  '/',
  (req, res) => {
    try {
      const { searchQuery } = req.body;
      console.log('params - ', {searchQuery})
      res.status(200).send(mockedData);
    } catch (error) {
      console.log('error - ', { error })
      res.status(400).send({ message: 'Error while data scraping' })
    }
  },
);

module.exports = scrapingRoutes;
