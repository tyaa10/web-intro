homeLink.addEventListener('click', ev => {
  ev.preventDefault()
  window.history.pushState({}, 'Web Intro - Главная', '/');
  title.innerText = 'Личный сайт Имя Фамилия'
  image.src = 'images/avatar.jpg'
  image.alt = 'avatar'
  text.innerText = 'Привет! Меня зовут Имя Фамилия. Я - начинающий программист. Начал осваивать профессию разработки сайтов совсем недавно, вот первый созданный мною сайт. В его разработке мне помогла Компьютерная Академия ТОП. Я уже знаю, что сайты состоят из двух частей - фронтенд и бэкенд. На своём сайте я разместил краткое описание обоих частей для начинающих программистов.'
})

frontLink.addEventListener('click', ev => {
  ev.preventDefault()
  window.history.pushState({}, 'Web Intro - Главная - О фронтенде', '/front');
  title.innerText = 'Что такое фронтенд-разработка?'
  image.src = 'images/frontend.jpg'
  image.alt = 'frontend languages'
  text.innerText = 'frontend-разработчик занимается клиентской частью веба, разработкой интерфейса цифрового продукта, то есть видимой пользователю части. Эта часть обычно создаётся на языках html, css и javascript.'
})

backLink.addEventListener('click', ev => {
  ev.preventDefault()
  window.history.pushState({}, 'Web Intro - Главная - О бэкенде', '/back');
  title.innerText = 'Что такое бэкенд-разработка?'
  image.src = 'images/backend.png'
  image.alt = 'backend languages'
  text.innerText = 'backend-специалист занимается созданием хранилища данных и логикой работы с ними, которые размещаются на серверах и скрыты от пользователя. Эта часть обычно создаётся на языках php (или Java/C#/JavaScript/Python/C++/...) и SQL.'
})