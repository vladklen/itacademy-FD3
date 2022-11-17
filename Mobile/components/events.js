import { EventEmitter } from 'events';

let voteEvents = new EventEmitter();
//EClientDelete удаляем выбранного клиента, его сэмиттирует MobilClient и примет MobileCompany
export { voteEvents };