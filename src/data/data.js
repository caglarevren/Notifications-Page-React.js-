import Person1 from '../assets/images/avatar-mark-webber.webp'
import Person2 from '../assets/images/avatar-angela-gray.webp'
import Person3 from '../assets/images/avatar-jacob-thompson.webp'
import Person4 from '../assets/images/avatar-rizky-hasanuddin.webp'
import Person5 from '../assets/images/avatar-kimberly-smith.webp'
import Person6 from '../assets/images/avatar-nathan-peterson.webp'
import Person7 from '../assets/images/avatar-anna-kim.webp'

export const persons = [
  {
    id: 1,
    read: false,
    name: 'Mark Webber',
    picture: Person1,
    comment: 'reacted to your recent post My first tournament today!',
    description: 'Description 1',
    smallImg: false,
    date: '1m ago',
  },
  {
    id: 2,
    read: false,
    name: 'Angela Gray',
    picture: Person2,
    comment: 'followed you',
    description: 'Description 2',
    smallImg: false,
    date: '5m ago',
  },
  {
    id: 3,
    read: false,
    name: 'Jacob Thompson',
    picture: Person3,
    comment: 'has joined your group Chess Club',
    description: 'Description 3',
    smallImg: false,
    date: '1 day ago',
  },
  {
    id: 4,
    read: true,
    name: 'Rizky Hasanuddin',
    picture: Person4,
    comment: 'sent you a private message',
    description: 'Description 4',
    smallImg: false,
    date: '5 days ago',
  },
  {
    id: 5,
    read: true,
    name: 'Kimberly Smith',
    picture: Person5,
    comment: 'commented on your picture',
    description: 'Description 5',
    smallImg: true,
    date: '1 week ago',
  },
  {
    id: 6,
    read: true,
    name: 'Nathan Peterson',
    picture: Person6,
    comment:
      'reacted to your recent post 5 end-game strategies to increase your win rate',
    description: 'Description 6',
    smallImg: false,
    date: '2 weeks ago',
  },
  {
    id: 7,
    read: true,
    name: 'Anna Kim',
    picture: Person7,
    comment: 'left the group Chess Club',
    description: 'Description 7',
    smallImg: false,
    date: '2 weeks ago',
  },
]
