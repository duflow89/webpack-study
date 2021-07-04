import './styles/index.scss';

const hello = {
  english: 'hello',
  korean: '안녕',
};

const addHello = {
  ...hello,
  spanish: 'hola',
};

console.log(addHello);
