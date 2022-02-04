const container = document.getElementById("container");
const title = document.getElementById("title");
const titleCountDown = document.getElementById("title-countDown");

const countDown = document.getElementById("countDown");
const textCountDown = document.getElementById("text-countDown");

const body = document.getElementsByTagName("body")[0];

const footers = document.getElementById("footers");

const someQuotes = document.getElementById("some-quotes");
const quote = document.getElementById("quotes");
const titleQuotes = document.getElementById("title-quotes");

const news = document.getElementById("news");
const titleNews = document.getElementById("title-news");
const textNews = document.getElementById("news-text");

const userLocation = document.getElementById("userLocation");
const titleUserLocation = document.getElementById("title-userLocation");
const textUserLocation = document.getElementById("userLocation-text");

const quotes = [
  {
    text: "Kita tidak bisa mengubah apapun, kita hanya bisa mengubah apa yang kita inginkan",
    author: "Mahatma Gandhi",
  },
  {
    text: "Hanya orang-orang yang tahu apa yang harus dilakukan untuk menjadi lebih baik",
    author: "Albert Einstein",
  },
  {
    text: "I'm a product of my passion for what I do",
    author: "Elon Musk",
  },
  {
    text: "Belajar dari apa yang kamu kuasai, bukan dari apa yang kamu tidak kuasai",
    author: "Steve Jobs",
  },
  {
    text: " memahami orang lain adalah sebuah kecerdasan memahami diri sendiri adalah sebuah kebijaksanaan ",
    author: "-human??",
  },
  {
    text: "You will face many defeats in life, but never let yourself be defeated",
    author: "-Maya angelou",
  },
  {
    text: "cewe selalu benar dan gmau salah dan cowo selalu salah krn mereka bodoh ",
    author: "-dapa",
  },
  {
    text: "Kebohongan menyelamatkanmu sementara, tapi menghancurkanmu selamanya",
    author: "-Lawliet (Death Note)-",
  },

  {
    text: "Kau tidak perlu tahu segalanya tentang teman baikmu, itulah yang membuat persahabatan itu menarik",
    author: "-Sendy (Spongebob Squarepants)-",
  },
  {
    text: "bukan hilang. hanya merelakan yang baik, untuk menyambut yang terbaik.",
    author: "-human",
  },
  {
      text: " kamu tidak bisa memaksakan seseorang untuk menomor satukan dirimu,sebab prioritas dengan kebutuhan itu jelas berbeda:)",
      author: "-human",
  },
];
    
let quotesRandom = quotes[Math.floor(Math.random() * quotes.length)];

let isHoverContainer = false;
let changeText = false
let theTimeIsLessThan100 = false

// check user country and then console.log it

function getUserCountry() {
    fetch("https://ipapi.co/json/")
        .then(response => response.json())
        .then(data => {
            console.log(data);
           textUserLocation.innerHTML = `your country: ${data.country_name}, <br> your city: ${data.city}, <br> timezone: ${data.timezone}, <br> region: ${data.region}, currency code: ${data.currency}, <br> currency name: ${data.currency_name}, <br> currency symbol: ${data.currency_symbol}, <br> country population: ${data.country_population}`;
        })
        .catch(error => {
            console.log(error)
            
        });
}

getUserCountry()

fetch(
  `https://newsapi.org/v2/top-headlines?country=id&apiKey=b2b7f668eb284c1595d7469eb48ad018`
)
    .then((response) => response.json())
  .then((data) => {
    let news = data.articles;
      let newsRandom = news[Math.floor(Math.random() * news.length)];
      if (newsRandom.author == null) {
          newsRandom.author = "gak di ketahui";
      }

      if (newsRandom.description == null) {
          newsRandom.description = "gak bisa mengakses deskripsi berita";
      }
      
      if (newsRandom.title == null) {
          newsRandom.title = "gak bisa mengakses judul berita";
      }
      

      textNews.innerHTML = `<a href="${newsRandom.url}">${newsRandom.title}</a>
        <br>
      ${newsRandom.description} <br> 
      ${newsRandom.publishedAt} <br> 
      ${newsRandom.source.name} <br> 
      <a href="${newsRandom.url}">Read More</a> this is is news then <br>

      penulis berita: ${newsRandom.author}`;
  }).catch((error) => {
      console.log(error);
  });

// make countDown to the 2023 also change the textCountDown
function countDownNewYears() {

    requestAnimationFrame(countDownNewYears);
    const now = new Date();
    const newYears = new Date(2023, 0, 1);
    const timeLeft = newYears - now;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // make minutes and seconds
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    const timeZone = now.toLocaleString();
    
    // make textCountDown
    if (changeText) {
        if (days === 0) {
            textCountDown.innerHTML = `${hours} jam, ${minutes} menit, ${seconds} detik lagi! <br> ⇩⇩⇩⇩⇩ <br> ${timeZone}`;
        } else {
            textCountDown.innerHTML = `${days} hari, ${hours} jam, ${minutes} menit, ${seconds} detik lagi! <br> ⇩⇩⇩⇩⇩ <br> ${timeZone}`;
        }

        if (days === 0 && hours === 0) {
            textCountDown.innerHTML = `${minutes} menit, ${seconds} detik lagi! <br> ⇩⇩⇩⇩⇩ <br> ${timeZone}`;
        } else if (days === 0 && hours === 0 && minutes === 0) {
            textCountDown.innerHTML = `${seconds} detik lagi`;
        } else {
            textCountDown.innerHTML = `${days} Hari - ${hours} - Jam -  ${minutes} Menit - ${seconds} Detik <br> ⇩⇩⇩⇩⇩ <br> ${timeZone}`;
    }
    } else {
        if (days === 0) {
            textCountDown.innerHTML = `${hours} jam, ${minutes} menit, ${seconds} detik lagi!`;
        } else {
            textCountDown.innerHTML = `${days} hari, ${hours} jam, ${minutes} menit, ${seconds} detik lagi!`;
        }

        if (days === 0 && hours === 0) {
            textCountDown.innerHTML = `${minutes} menit, ${seconds} detik lagi!`;
        } else if (days === 0 && hours === 0 && minutes === 0) {
            textCountDown.innerHTML = `${seconds} detik lagi!`;
        } else {
            textCountDown.innerHTML = `${days} Hari - ${hours} Jam -  ${minutes} Menit - ${seconds} Detik`;
        }
    }

    // make animation when the textCountDown is changed
    if (changeText) {
        textCountDown.style.animation = "textCountDownAnimation 1s ease-in-out";
    } else {
        textCountDown.style.animation = "none";
    }

    // make titleCountDown
    titleCountDown.innerHTML = `count down to the ${2023}`;
    // make quote
    quote.innerHTML = `${quotesRandom.text} <br>- ${quotesRandom.author}`;

    // if time left is more than 0
    if (!theTimeIsLessThan100 || hours > 0 && days > 0) {
        if (window.innerWidth > 768) {
            container.addEventListener("mouseover", () => {
                titleCountDown.style.color = "white"
                textCountDown.style.color = "white"
                // make the some quotes disappear go to the left with transition
                someQuotes.style.transition = "all 1s";
                someQuotes.style.transform = "translateX(-150%) translateY(100px)";

                container.style.transform = "scale(1.2) translate(0%, 50%)";
                container.style.backgroundColor = "black"
                container.style.color = "white"
                isHoverContainer = true
                changeText = true

                news.style.transition = "all 1s";
                news.style.transform = "translateX(-150%) translateY(100px)";

                footers.style.transition = "all 1s";
                footers.style.transform = "translateY(150px)";
                
                userLocation.style.transition = "all 1s";
                userLocation.style.transform =
                  "translateX(0) translateY(500px)";

            });

            // if not make it normal
            container.addEventListener("mouseout", () => {
                container.style.transform = "scale(1) translate(0%, 0%)";
                container.style.backgroundColor = "white"
                container.style.color = "black"
        
                titleCountDown.style.color = "black"
                textCountDown.style.color = "black"
        
                // make the some quotes appear go to the right with transition
                someQuotes.style.transition = "all 1s";
                someQuotes.style.transform = "translateX(0) translateY(100px)";
                changeText = false
                setTimeout(() => {
                    isHoverContainer = false;
                }, 10000);

                news.style.transition = "all 1s";
                news.style.transform = "translateX(0) translateY(0px)";

                footers.style.transition = "all 1s";
                footers.style.transform = "translateY(0px)";

                userLocation.style.transition = "all 1s";
                userLocation.style.transform = "translateX(0) translateY(0px)";
            });
        } else {
            // if user use mobile phone
            container.addEventListener("touchstart", () => {
                setTimeout(() => {
                    titleCountDown.style.color = "white"
                    textCountDown.style.color = "white"

                    container.style.backgroundColor = "black"
                    container.style.color = "white"
                }, 5);
            });
    
            // if not make it normal
            container.addEventListener("touchend", () => {
                setTimeout(() => {
                    container.style.backgroundColor = "white"
                    container.style.color = "black"
        
                    titleCountDown.style.color = "black"
                    textCountDown.style.color = "black"
        
                    // make the some quotes appear go to the right with transition
                    isHoverContainer = false
                }, 5);
            });
        }
    }

    // if day is less than 100 and more than 50 make the background color is darker
    if (days <= 100 && days >= 50) {
        theTimeIsLessThan100 = true
    footers.style.backgroundColor = "white";
    titleCountDown.style.color = "white"
    textCountDown.style.color = "white"
        container.style.backgroundColor = "rgb(0, 0, 0, 0.5)"
    body.style.backgroundColor = "rgb(0, 0, 0, 0.5)"
        someQuotes.style.backgroundColor = "rgb(50, 50, 0, 0.5)"
        // make transition
        someQuotes.style.transition = "all 1s";
        titleCountDown.style.transition = "all 1s";
        textCountDown.style.transition = "all 1s";
        container.style.transition = "all 1s";
        body.style.transition = "all 1s";

    } else {
        theTimeIsLessThan100 = false
    }
}

countDownNewYears();