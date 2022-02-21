import { ListItem } from "./types";
import Margo from "./assets/margo.jpg";
import Progway from "./assets/progway.jpg";
import Alena from "./assets/alena.jpg";
import Evdklar from "./assets/evdlar.jpg";
import GoalGesture from "./assets/goal_geasture.jpg";
import VebStandarts from "./assets/veb-stnd.jpg";
import Books from "./assets/book.jpg";

export const data: ListItem[] = [
  {
    path: "margo.savchuk",
    avatar: Margo,
    type: "instagram",
    title: "margo.savchuk",
    text: "Блогер про духовность, бизнес и раскрепощение. Очень милая девушка у которой всегда есть чему учиться.",
    link: "https://instagram.com/margo.savchuk?utm_medium=copy_link",
    posts: '2539 публикаций',
    followers: '627тыс. подписчиков',
    following: '425 подписок'
  },
  {
    path: "progway",
    avatar: Progway,
    type: "telegram",
    title: "progway - программирование, IT",
    text: "Любимй канал по программированию. Интересные и полезные материалы из мира IT только здесь.",
    link: "https://t.me/prog_way_blog",
    followers: '500 подписчиков',
  },
  {
    path: "alenadaleko",
    avatar: Alena,
    type: "instagram",
    title: "alenadaleko",
    text: "Самая продуктивная девочка, кажется она успевает вообще все. Делится своими знаниями и советами в блоге.",
    link: "https://instagram.com/alenadaleko?utm_medium=copy_link",
    posts: '5 публикаций',
    followers: '1013 подписчиков',
    following: '0 подписок'
  },
  {
    path: "evdklar",
    avatar: Evdklar,
    type: "instagram",
    title: "evdklar",
    text: "Блогер Дуня с большой попой, отменным музыкальным вкусом и просто огромным уровнем владения английским.",
    link: "https://instagram.com/evdklar?utm_medium=copy_link",
    posts: '723 публикаций',
    followers: '1,6млн. подписчиков',
    following: '88 подписок'
  },
  {
    path: "goal.gesture",
    avatar: GoalGesture,
    type: "telegram",
    title: "Goal Gesture программирование, IT",
    text: "Самые свежие новости, интересные статьи и другие материалы по программированию и не только.",
    link: "https://t.me/goalgesture",
    followers: '8 232 подписчиков',
  },
  {
    path: "veb.standarts",
    avatar: VebStandarts,
    type: "telegram",
    title: "Веб-стандарты",
    text: "Ежедневные новости и события связанные с frontend от сообщества веб-разработчиков.",
    link: "https://t.me/webstandards_ru",
    followers: '16 578 подписчиков',
  },
  {
    path: "books",
    avatar: Books,
    type: "telegram",
    title: "Книги по программированию",
    text: "Архив книг по программированию. Тут можно найти абсолютно любую книгу, а также скачать в формате pdf.",
    link: "https://t.me/python_books_archive",
    followers: '17 024 подписчиков',
  },
];
