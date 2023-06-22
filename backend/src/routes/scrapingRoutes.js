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

const puppeteer = require('puppeteer')

// const siteUrl = `https://www.target.com`
const siteUrl = `https://www.pexels.com/search`

const fetchData = async (searchQuery) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setRequestInterception(true);
  const query = `s?searchTerm=${searchQuery}`
  // const query = 'chocolate'

  page.on('request', request => {
    if (request.resourceType() === 'image') {
      request.abort();
    } else {
      request.continue();
    }
  });
  await page.goto(`${siteUrl}/${query}`)
  await page.screenshot({path: 'news.png', fullPage: true});

  await browser.close();

  // const data = await page.evaluate(el => {
  //   const items = document.querySelectorAll(`a`);
  //   const res = []

  //   for (const item of items) {
  //     if (item.textContent)
  //     res.push(item.textContent)
  //   }

  //   return items
  // })

  // return data
  return ['test1', 'test2']
}

scrapingRoutes.post(
  '/',
  async (req, res) => {
    try {
      const { searchQuery } = req.body;
      if (!searchQuery) {
        res.status(400).json({ error: true, message: 'Input a Search Query' })
        return
      }
      console.log('params - ', {searchQuery})
      const data = await fetchData(searchQuery)
      res.status(200).send(data);
      // res.status(200).send({error: false, items: mockedData});
    } catch (error) {
      console.log('error - ', { error })
      res.status(400).send({ error: true, message: 'Error while data scraping' })
    }
  },
);

module.exports = scrapingRoutes;
