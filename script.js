// write your JavaScript here

const quoteParagr = document.querySelector('.quote')
const twitterBtn = document.querySelector('.twitter-button')
const quoteBtn = document.querySelector('.quote-button')

console.dir(quoteParagr)

// quoteBtn.addEventListener('click', async (e) => {
//    try {
//    const paragrValue = quoteParagr.innerText
//    const randQuote = await axios.get('https://quoterism.com/api/quotes/random')
//    console.log(randQuote)
//    } catch (e) {
//       console.log('ERROR:', e)
//    }
   
// })



// fetch('https://quoterism.com/api/quotes/random'), {
//   mode:  'cors', 
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// }

const api_url ="https://zenquotes.io/api/quotes/";

async function getapi(url)
{
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
}

