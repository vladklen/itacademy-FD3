import { EventEmitter } from 'events';

let mobileEvents = new EventEmitter();
//EClientDelete удаляем выбранного клиента, его сэмиттирует MobilClient и примет MobileCompany
//ECliendAdd добовляем нового клиента/или редактируем информацию
export { mobileEvents };