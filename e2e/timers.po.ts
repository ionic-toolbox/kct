import { $, $$ } from 'protractor';

// page
export const url = '/#timers';
export const title = 'Games Timers';

// navigated to
export const navigatedTo_TimerConfig = 'timer-config';

// page components
export const timers$$ = $$('app-timer-list-card');

export const timer1$ = timers$$.first();

export const timer1Setting$ = timer1$.$('#setting');
export const addButton$ = $('button[ion-fab]');

