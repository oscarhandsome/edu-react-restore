export default class BookstoreService {
  data = [
    {
      id: 1,
      title: "Изучаем программирование на JavaScript",
      author: "Фримен, Робсон",
      coverImage:
        "https://media.proglib.io/posts/2020/02/28/933f353fb3a0e42c0eb57ee01b9c2d90.jpg",
      price: 32,
    },
    {
      id: 2,
      title: "JavaScript для чайников",
      author: "Минник, Холланд",
      coverImage:
        "https://media.proglib.io/posts/2020/03/01/8a2f3a927258b1ae95c883de5ac39809.jpg",
      price: 32,
    },
    {
      id: 3,
      title: "Как устроен JavaScript",
      author: "Д. Крокфорд",
      coverImage:
        "https://media.proglib.io/posts/2020/03/01/45071669da85a82be087e48ae586e750.jpg",
      price: 34,
    },
    {
      id: 4,
      title:
        "Изучаем JavaScript. Руководство по созданию современных веб-сайтов",
      author: "Э. Браун",
      coverImage:
        "https://media.proglib.io/posts/2020/02/28/98b63ff1a155e950a49f2b3124fb1d62.jpg",
      price: 50,
    },
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error("Something bad happened"));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
}
