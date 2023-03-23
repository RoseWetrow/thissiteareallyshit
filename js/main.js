//Переменная для хранения div с классом wrapper-menu container
let wrapper_menu_container = document.querySelector('.wrapper-menu.container')

let menu = document.createElement('nav') //Создание элемента nav
menu.className = 'menu'
wrapper_menu_container.appendChild(menu) //Помещение menu в wrapper-menu container

let ul = document.createElement('ul') //Создание элемента ul
menu.appendChild(ul) //Помещение ul в menu

// Создание многоуровневого массива
let menuEl = [['Регионы', 'region'], ['Отели', 'hotel']]


for(let i=0; i<2; i++){

    let title = menuEl[i][0] // Перебор
    let yak = menuEl[i][1]

    let a = document.createElement('a') // Создание и заполнение элемента
    a.setAttribute('href', `#${yak}`)
    a.textContent = title

    let li = document.createElement('li') // Помещение элементов
    ul.appendChild(li)
    li.appendChild(a)

  //  console.log(a.getAttribute('href'))
}


let homeHref = document.createElement('a')         // Создание элемента для домашней ссылки
homeHref.textContent = 'Главная'
homeHref.setAttribute('href', '#home')             // Применение атрибута href

let menuHref = document.querySelectorAll('ul a')   // Получаем все ссылки

let li = document.createElement("li")              
li.appendChild(homeHref)
ul.insertBefore(li, ul.firstChild)                 // Помещение элемента

for (href of menuHref) {                           // ?
  console.log(href)
}

let phoneHref = document.createElement('a')        // Создание элемента для ссылки на домашнюю страницу
phoneHref.className = 'phone'
phoneHref.textContent = '+7(910)-001-20-40'
phoneHref.setAttribute('href', 'tel:+79100012040')
menu.appendChild(phoneHref)                        // Помещение элемента

console.log(phoneHref)

// Создание многоуровневого объекта для главной секции (home)
let contentHome = {
    'home':{
        heading: 'Main Heading',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.'
    }
}


for(home in contentHome){

  document.querySelector('.main-info.container').innerHTML += `<h1>${contentHome[home].heading}</h1>`       // Добавление заголовка на домашнюю страницу
  document.querySelector('.main-info.container').innerHTML += `<p>${contentHome[home].description}</p>`     // Добавление параграфа на домашнюю страницу

}

// document.querySelector('.main-info.container').innerHTML += `<h1>${contentHome['home'].heading}</h1>` // Добавление заголовка на домашнюю страницу
// document.querySelector('.main-info.container').innerHTML += `<p>${contentHome['home'].description}</p>`    // Добавление параграфа на домашнюю страницу


// Практическая работа №2

// Создание многоуровневого объекта для хранения home и region
let hotelAndRegionList = Object.create(null)
hotelAndRegionList.region = {}
hotelAndRegionList.hotel = {}
console.log(hotelAndRegionList)


// Создание второго уровня вложенности при помощи циклов
for(const hotel_region in hotelAndRegionList){

    let i = 1; // Счетчик
    // console.log(hotel_region)
    // console.log(hotelAndRegionList[hotel_region][i])

    while(i<=5){

        switch(hotel_region){
            case 'region':
                hotelAndRegionList[hotel_region][i]= {  // Создание второго уровня
                    id: i,
                    heading: (i===1) ? 'Москва' : (i===2) ? 'Санкт-Петербург' : (i===3) ? 'Новосибирск' : (i===4) ? 'Казань' :  'Сочи',
                    img: (i===1) ? '/img/region1.png' : (i===2) ? '/img/region2.png' : (i===3) ? '/img/region3.png' : (i===4) ? '/img/region4.png' :  '/img/region5.png'
                }
                break; 
                
            case 'hotel':
                hotelAndRegionList[hotel_region][i] = {  // Создание второго уровня
                    id: i,
                    heading: (i===1) ? 'METROPOL Отель Москва' : (i===2) ? 'Англетер Санкт-Петербург' : (i===3) ? 'Grand Autograph Hotel Новосибирск' : (i===4) ? 'Kazan Palace by Tasigo' :  'Swissôtel Resort Сочи Камелия',
                    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
                    img: (i===1) ? '/img/hotel1.jpg' : (i===2) ? '/img/hotel2.jpg' : (i===3) ? '/img/hotel3.jpeg' : (i===4) ? '/img/hotel4.png' :  '/img/hotel5.jpg'
                }
                break;
            default:
                console.log('Error create Object')  
        }
        i++;
    }
}

// console.log(hotelAndRegionList)

// Объединение объекта с секцией home с region и hotel
let HomeHotelRegion = Object.assign(contentHome, hotelAndRegionList)
console.log(HomeHotelRegion)

// Получение элемента div с классом container.bg-region.wrapper-region для добавление в него элементов из цикла ниже
let wrapperRegion = document.querySelector('.wrapper-region')

// Цикл для создания 5 элементов в dom-структуре
for(let i = 1; i<=5; i++){

    let regionItem = document.createElement('div')
    regionItem.className = 'region-item'
    wrapperRegion.appendChild(regionItem)

    let regionDescription = document.createElement('div')
    regionDescription.className = 'region-description'
    regionItem.appendChild(regionDescription)

    let linkHotel = document.createElement('a')
    linkHotel.className = 'link-hotel'
    linkHotel.setAttribute('href', `#hotel-${i}`);
    linkHotel.textContent = hotelAndRegionList['hotel'][i].heading
    regionDescription.appendChild(linkHotel)

}

// Получение элементов для цикла перебора ниже
let regionDescription = document.querySelectorAll('.region-description')
let linkHotel = document.querySelectorAll('.link-hotel')
let wrapperHotel = document.querySelector('.wrapper-hotel')

for (const elements in HomeHotelRegion) {

  for (const hotel_region in HomeHotelRegion[elements]) {

    switch (elements) {

      case 'region': // Заполнение элемента div гербом и названием Города
        regionDescription[hotel_region-1].innerHTML += `<img src="${HomeHotelRegion[elements][hotel_region].img}" alt="${HomeHotelRegion[elements][hotel_region].img}"/>
        <h3>${HomeHotelRegion[elements][hotel_region].heading}</h3>`
        break;

      case 'hotel': 
        let hotelImg = document.createElement('img') // Создание элемента для хранения картинки отеля
        hotelImg.className = 'hotel-img'
        hotelImg.setAttribute('src', `${HomeHotelRegion[elements][hotel_region].img}`)
        hotelImg.setAttribute('id', `hotel-${hotel_region}`) // id для ссылки
        wrapperHotel.appendChild(hotelImg)

        // Не работает
        // linkHotel[hotel_region-1].setAttribute('href', `#hotel-${hotel_region}`); 
        // linkHotel[hotel_region-1].innerHTML += `${HomeHotelRegion[elements][hotel_region].heading}`

        let contentHotel = document.createElement('div') //Создание элемента div для хранения названия и описания отеля
        contentHotel.className = 'content-hotel'
        contentHotel.innerHTML += `<h3>${HomeHotelRegion[elements][hotel_region].heading}</h3>
        <p>${HomeHotelRegion[elements][hotel_region].description}</p>`
        wrapperHotel.appendChild(contentHotel)
        break;

      default:
        console.log('Error create Object')
        break;
    }
  }
}

// Получение элементов для цикла перебора ниже
// let regionDescription = document.querySelectorAll('.region-description')
// let linkHotel = document.querySelector('.link-hotel')
// let wrapperHotel = document.querySelector('.wrapper-hotel')



// for(const elements in HomeHotelRegion){

//     for(const hotel_region in HomeHotelRegion[elements]){

//         switch(elements){
//             case 'region':
//                 regionDescription.innerHTML += `<img src="${HomeHotelRegion[elements][hotel_region].img}" alt="${HomeHotelRegion[elements][hotel_region].img}"/>
//                 <h3>${HomeHotelRegion[elements][hotel_region].heading}</h3>`
//                 break;

//             case 'hotel':
//                 linkHotel.setAttribute('href', `#hotel-${[hotel_region]}`)
//                 linkHotel.innerHTML +=`${HomeHotelRegion[elements][hotel_region].description}`

//                 let hotelImg = document.createElement('img')
//                 hotelImg.className = 'hotel-img'
//                 hotelImg.setAttribute('src', `${HomeHotelRegion[elements][hotel_region].img}`)
//                 hotelImg.setAttribute('id', `hotel-${hotel_region}`)
//                 wrapperHotel.appendChild(hotelImg)

//                 let contentHotel = document.createElement('div')
//                 contentHotel.className = 'content-hotel'
//                 contentHotel.innerHTML += `<h3>${HomeHotelRegion[elements][hotel_region].heading}</h3>
//                 <p>${HomeHotelRegion[elements][hotel_region].description}</p>`
//                 wrapperHotel.appendChild(contentHotel)
//                 break;

//             default:
//                 console.log('Error create Object')
//                 break;
//         }
        
//     }
// }


