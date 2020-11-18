import { writable } from "svelte/store";
import type Quiz from "./lib/quiz";

export const quiz = writable<Quiz>(undefined);
export const showIndicators = writable<boolean>(undefined);
