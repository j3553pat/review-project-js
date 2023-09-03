const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];

const imageEl = document.getElementById('person-img') 
const authorEl = document.getElementById('author') 
const jobEL = document.getElementById('job') 
const infoEl = document.getElementById('info') 

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

let curItem = 0

window.addEventListener('DOMContentLoaded', () => {
    showPerson(curItem)
})

const showPerson = (e) => {
    const item = reviews[e]
    imageEl.src = item.img
    authorEl.textContent = item.name
    jobEL.textContent = item.job
    infoEl.textContent = item.text
}

nextBtn.addEventListener('click', () => {
    curItem++
    if(curItem > reviews.length - 1) {
        curItem = 0
    }
    showPerson(curItem)
})

prevBtn.addEventListener('click', () => {
    curItem--
    if(curItem < 0) {
        curItem = reviews.length - 1
    }
    showPerson(curItem)
})

randomBtn.addEventListener('click', () => {
 curItem = Math.floor(Math.random() * reviews.length)
   showPerson(curItem)
})
