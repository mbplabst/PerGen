import { writable } from 'svelte/store';

export const lockedState = writable(true);

export const globalGender = writable("Nicht ausgewählt");
export const globalName = writable("Nicht ausgewählt");
export const globalAge = writable("Nicht ausgewählt");
export const globalHobbys = writable(["Nicht ausgewählt"]);
