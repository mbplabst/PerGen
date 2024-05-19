import { writable } from 'svelte/store';

export const lockedState = writable(true);

export const globalGender = writable("");
export const globalPreName = writable("");
export const globalSurName = writable("");
export const currentAge = writable(0);
