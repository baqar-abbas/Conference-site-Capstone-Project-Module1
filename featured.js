/* eslint-disable linebreak-style */

const speakerCards = [
  {
    card: 1,
    name: 'Barr Moses',
    image: './images/speaker1.jpg',
    description: 'Co-founder & CEO at Monte Carlo.',
    description2: `Barr is co-founder of data reliability company Monte Carlo.
      Barr is co-founder of data reliability company Monte Carlo.`,
  },
  {
    card: 2,
    name: 'Changpeng Zhao',
    image: './images/speaker2.png',
    description: 'Co-founder & CEO at Binance',
    description2: `In 2020, Bloomberg recognised Changpeng as one of the
      most influential people of the year, and as someone who has changed the global business landscape. `,
  },
  {
    card: 3,
    name: 'Amrapali Gan',
    image: './images/speaker3.png',
    description: ' CEO at OnlyFans.',
    description2: ` Amrapali is CEO of OnlyFans. She oversees OnlyFans’ mission to revolutionize creator 
      and fan connections by building a safe and inclusive platform. `,
  },
  {
    card: 4,
    name: 'Lindsay Kaplan',
    image: './images/speaker4.jpg',
    description: 'Co-founder at Chief.',
    description2: 'Lindsay is the co-founder and chief brand officer of Chief — the most powerful network of women executives. ',
  },
  {
    card: 5,
    name: 'Dileep Thazhmon',
    image: './images/speaker5.jpg',
    description: 'CEO & Co-Founder at Jeeves.',
    description2: 'Dileep is co-founder and CEO at Jeeves. He was previously co-founder and chief operating officer at Jeeng..',
  },
  {
    card: 6,
    name: 'Kathleen Breitman',
    image: './images/speaker6.jpg',
    description: 'Co-founder & CEO at Tezos.',
    description2: 'Kathleen was one of the early architects of Tezos, which utilises a proof-of-stake mechanism to provide high-security and low-energy usage.',
  },
];

const divtohide = document.querySelector('.seemore-div');
const button = document.querySelector('.see-more');
const featuredDiv = document.querySelector('.dynamic');
const divtohide2 = document.querySelector('.seemore-div-desktop');
const button2 = document.querySelector('.see-more-desktop');
const featuredDiv2 = document.querySelector('.dynamic-desktop');

const menuWrite = () => {
  divtohide.style.display = 'none';
  featuredDiv.innerHTML = `<section class="featured-speaker">
    <div class="image-of-background">
  <img class="featured-speakers" src="${speakerCards[2].image}" alt="speaker1" width="100px" height="100px">
    </div>
    <div class="fetured-text">
     <h4 class="featured-heading">${speakerCards[2].name}</h4>
     <p class="featured-para"> <i>${speakerCards[2].description}</i></p>
     <span class="featured-span">${speakerCards[2].description2}</span> 
    </div>
      </section>
      <section class="featured-speaker">
    <div class="image-of-background">
  <img class="featured-speakers" src="${speakerCards[3].image}" alt="speaker1" width="100px" height="100px">
    </div>
    <div class="fetured-text">
     <h4 class="featured-heading">${speakerCards[3].name}</h4>
     <p class="featured-para"> <i>${speakerCards[3].description}</i></p>
     <span class="featured-span">${speakerCards[3].description2}</span> 
    </div>
      </section>
      <section class="featured-speaker">
    <div class="image-of-background">
  <img class="featured-speakers" src="${speakerCards[4].image}" alt="speaker1" width="100px" height="100px">
    </div>
    <div class="fetured-text">
     <h4 class="featured-heading">${speakerCards[4].name}</h4>
     <p class="featured-para"> <i>${speakerCards[4].description}</i></p>
     <span class="featured-span">${speakerCards[4].description2}</span> 
    </div>
      </section>
      <section class="featured-speaker">
    <div class="image-of-background">
  <img class="featured-speakers" src="${speakerCards[5].image}" alt="speaker1" width="100px" height="100px">
    </div>
    <div class="fetured-text">
     <h4 class="featured-heading">${speakerCards[5].name}</h4>
     <p class="featured-para"> <i>${speakerCards[5].description}</i></p>
     <span class="featured-span">${speakerCards[5].description2}</span> 
    </div>
      </section>`;
};

const menuWritedesktop = () => {
  divtohide2.style.display = 'none';
  featuredDiv2.innerHTML = `<table>
  <tr>
      <td><div class="image-of-background">
          <img class="featured-speakers" src="${speakerCards[2].image}" alt="speaker1" width="100px" height="100px">
      </div></td>
      <td><h4 class="featured-heading-">${speakerCards[2].name}</h4>
          <p class="featured-para"> <i>${speakerCards[2].description}</i></p>
          <span class="featured-span">${speakerCards[2].description2}
          </span> </td>
      <td><div class="image-of-background">
          <img class="featured-speakers" src="${speakerCards[3].image}" alt="speaker1" width="100px" height="100px">
      </div>
      </td>
  <td><h4 class="featured-heading">${speakerCards[3].name}</h4>
      <p class="featured-para"><i>${speakerCards[3].description}</i></p>
      <span class="featured-span">${speakerCards[3].description2}
      </span> </td>
  </tr>
  <tr>
      <td><div class="image-of-background">
          <img class="featured-speakers" src="${speakerCards[4].image}" alt="speaker1" width="100px" height="100px">
      </div></td>
      <td><h4 class="featured-heading-">${speakerCards[4].name}</h4>
          <p class="featured-para"> <i>${speakerCards[4].description}</i></p>
          <span class="featured-span">${speakerCards[4].description2}
          </span> </td>
      <td><div class="image-of-background">
          <img class="featured-speakers" src="${speakerCards[5].image}" alt="speaker1" width="100px" height="100px">
      </div>
      </td>
  <td><h4 class="featured-heading">${speakerCards[5].name}</h4>
      <p class="featured-para"><i>${speakerCards[5].description}</i></p>
      <span class="featured-span">${speakerCards[5].description2}
      </span> </td>
  </tr>
</table>`;
};

button.addEventListener('click', menuWrite);
button2.addEventListener('click', menuWritedesktop);
