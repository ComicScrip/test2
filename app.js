import dayjs from 'dayjs';
import domI18n from './dom-i18n';
import { functionOne, functionTwo } from './myModule';

window.console.log(dayjs().format('HH:mm:ss'));

const i18n = domI18n({
  selector: '[data-translatable]',
  separator: ' // ',
  languages: ['en', 'fr'],
  defaultLanguage: 'fr',
});

document.getElementById('switch-fr-btn').addEventListener('click', () => {
  i18n.changeLanguage('fr');
});
document.getElementById('switch-en-btn').addEventListener('click', () => {
  i18n.changeLanguage('en');
});

functionOne();
functionTwo();
