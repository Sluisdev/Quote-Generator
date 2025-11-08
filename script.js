// write your JavaScript here

const quoteParagr = document.querySelector('.quote')
const authorElement = document.querySelector('.author')
const twitterBtn = document.querySelector('.twitter-button')
const quoteBtn = document.querySelector('.quote-button')
const quoteBox = quoteParagr.innerText
// const authrBox = authorElement.innerText


quoteBtn.addEventListener('click', async (e) => {
   try {
   const response = await axios.get('https://corsproxy.io/?https://quoterism.com/api/quotes/random')
   const quote = response.data.text;
   const {name} = response.data.author
   quoteParagr.innerText = quote
   authorElement.innerText = name
   } catch (e) {
      console.log('ERROR:', e)
   }
   
})
