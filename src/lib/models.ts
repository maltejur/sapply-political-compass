import type Quiz from "./quiz";

export interface Question {
  id: number;
  question: string;
  effects: {
    right?: number;
    auth?: number;
    prog?: number;
  };
  stance?: number;
}

export class Stance extends Number {
  public toString() {
    switch (this as Number) {
      case 1:
        return "Strongly Agree";
      case 0.5:
        return "Agree";
      case 0:
        return "Neutral";
      case -0.5:
        return "Disagree";
      case -1:
        return "Strongly Disagree";
    }
  }

  public toColor() {
    switch (this as Number) {
      case 1:
        return "is-success";
      case 0.5:
        return "is-success is-light";
      case 0:
        return "is-light";
      case -0.5:
        return "is-danger is-light";
      case -1:
        return "is-danger";
    }
  }
}

export interface Position {
  right: number;
  auth: number;
  prog: number;
}

export interface QuizStore {
  shuffled: boolean;
  showCompass: boolean;
  quiz: Quiz;
}
