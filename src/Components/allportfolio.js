import port1 from '../img/portImages/messenger.png';
import port2 from '../img/portImages/twitter.png';
import port3 from '../img/portImages/dentista.png';
import port4 from '../img/portImages/todo.png';

const portfolios = [
  {
    id: 1,
    category: 'React',
    link1: 'youtube.com',
    link2: 'github.com',
    icon1: 'Git',
    icon2: 'Url',
    image: port1,
    title: 'Messenger Clone App',
    description:
      'Web App de mensajeria desarrollada con React, permite enviar mensajes a contactos registrados en la página.'
  },
  {
    id: 2,
    category: 'React',
    link1: 'youtube.com',
    link2: 'github.com',
    icon1: 'Git',
    icon2: 'Url',
    image: port2,
    title: 'Twitter Clone',
    description:
      'Un clon de Twitter desarrollado con React. Permite crear publicaciones, dar likes y comentar'
  },
  {
    id: 3,
    category: 'Pagina Web',
    link1: 'youtube.com',
    link2: 'github.com',
    icon1: 'Git',
    icon2: 'Url',
    image: port3,
    title: 'Dentista Página',
    description:
      'Proyecto grupal para la asignatura Metodologia de los sistemas, consiste en una página web para solicitar turnos de atención'
  },
  {
    id: 4,
    category: 'Vue',
    link1: 'youtube.com',
    link2: 'github.com',
    icon1: 'Git',
    icon2: 'Url',
    image: port4,
    title: 'TODO App',
    description:
      'Una aplicación web para anotar tareas desarrollada con Vue, Vuex y Vue Router'
  }
];

export default portfolios;
