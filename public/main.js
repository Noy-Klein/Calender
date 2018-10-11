import EventsRepository from './events-repository.js';
import EventsRenderer from './events-renderer.js';
import EventsHandler from './events-handler.js';

let eventsRepository = new EventsRepository();
let eventsRenderer = new EventsRenderer();
let eventsHandler = new EventsHandler(eventsRepository, eventsRenderer)

eventsHandler.onLoad();
eventsHandler.nextMonth();
eventsHandler.previousMonth();
eventsHandler.onLoadMonth();
eventsHandler.registerAddEvent();
eventsHandler.close();
eventsHandler.addEventDetails();
eventsHandler.modalClick();
eventsHandler.delete();
eventsRepository.getHolidays();
eventsRenderer.renderHolidays();