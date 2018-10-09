import EventsRepository from './events-repository'
import EventsRenderer from './events-renderer'
import EventsHandler from './events-handler'

let eventsRepository = new EventsRepository();
let eventsRenderer = new EventsRenderer();
let eventsHandler = new EventsHandler(eventsRepository, eventsRenderer)