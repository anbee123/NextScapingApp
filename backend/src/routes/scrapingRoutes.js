const express = require('express');
const scrapingRoutes = express.Router();

const puppeteer = require('puppeteer')

const BaseUrl = `https://www.target.com`

const scrollDownWait = async (page) => {
  const scrollWaitTime = 500
  await page.evaluate( () => {
    window.scrollBy(0, window.innerHeight);
  });
  console.log('----- scroll downed')
  await page.waitForTimeout(scrollWaitTime)
}

const scrollPageToBottom = async (page, scrollDownCount) => {
  const promises = Array(scrollDownCount).fill(scrollDownWait)
  if (!page) return
  await promises.reduce(async (prev, next) => {
    return prev.then(() => next(page))
  },Promise.resolve())
}

const fetchProducts = async (searchQuery) => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    dumpio: true,
    defaultViewport: {
      width: 1280,
      height: 720,
    },
  })
  const page = await browser.newPage()
  const url = `${BaseUrl}/s?searchTerm=${searchQuery}`

  console.log(`Scraping URL: ${url}`)
  await page.goto(url, {
    waitUntil: "networkidle2",
  })

  page.on('console', message => {
    const type = message.type().substr(0, 3).toUpperCase()
    console.log(`- page log - ${type} ${message.text()}`)
  })

  await scrollPageToBottom(page, 6)
  await page.waitForTimeout(3000)

  const data = await page.evaluate(el => {

    const keyClass = {
      element: '.styles__StyledCardWrapper-sc-z8946b-0',
      title: '.styles__Truncate-sc-1wcknu2-0 a',
      price: `[data-test="current-price"] span`,
      description: '.author',
      imgUrl: '.ProductCardImage__PicturePrimary-sc-1y6rvoy-0.cJlyMM img',
      linkUrl: 'a.styles__StyledLink-sc-vpsldm-0.kSbXRQ.h-display-block',
    }

    const elementItems = document.querySelectorAll(keyClass.element);
    const res = []
    if (!elementItems) return res

    console.log('element counts: ', elementItems.length)
    elementItems.forEach(item => {
      if (!item) return
      const titleElement = item.querySelector(keyClass.title)
      if (!titleElement) return
      const title = titleElement.textContent

      const priceElement = item.querySelector(keyClass.price)
      if (!priceElement) return
      const price = priceElement.textContent

      const imgElement = item.querySelector(keyClass.imgUrl)
      if (!imgElement) return
      const imgUrl = imgElement.getAttribute('src')

      const linkElement = item.querySelector(keyClass.linkUrl)
      if (!linkElement) return
      const linkUrl = linkElement.getAttribute('href')

      res.push({
        title,
        price,
        imgUrl,
        linkUrl,
      })

    })
    return res
  })
  await browser.close();

  return data
}

scrapingRoutes.post(
  '/',
  async (req, res) => {
    try {
      const { searchQuery } = req.body;
      if (!searchQuery) {
        res.status(400).json({ error: true, message: 'No Search Query' })
        return
      }
      console.log('params - ', {searchQuery})
      const data = await fetchProducts(searchQuery)

      res.status(200).send({error: false, items: data});
    } catch (error) {
      console.log('error - ', { error })
      res.status(400).send({ error: true, message: 'Error while data scraping' })
    }
  },
);

module.exports = scrapingRoutes;
