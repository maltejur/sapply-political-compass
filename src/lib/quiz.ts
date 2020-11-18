import originalQuestions from "../../static/questions.json";
import type { Question, Position } from "./models";

export default class Quiz {
  questions: Question[];
  answeredQuestions = 0;
  position: Position;

  constructor(shuffled: boolean) {
    this.questions = shuffled
      ? shuffleArray(originalQuestions)
      : originalQuestions;
    this.position = {
      right: 0,
      auth: 0,
      prog: 0,
    };
  }

  public shuffle() {
    this.questions = shuffleArray(this.questions);
  }

  public calcPosition() {
    let n = {
      right: 0,
      auth: 0,
      prog: 0,
    };
    let p = {
      right: 0,
      auth: 0,
      prog: 0,
    } as Position;
    for (const el of this.questions) {
      if (el.stance) {
        for (const effect in el.effects) {
          n[effect]++;
          p[effect] += ((el.stance as Number) as number) * el.effects[effect];
        }
      }
    }
    p = {
      right: n.right == 0 ? 0 : p.right / n.right,
      auth: n.auth == 0 ? 0 : p.auth / n.auth,
      prog: n.prog == 0 ? 0 : p.prog / n.prog,
    };
    console.log(n, p);
    this.position = p;
    this.answeredQuestions = n.right + n.auth + n.prog;
  }
}

export function calcColor(right, auth) {
  const left = right < 0 ? -right : 0;
  right = right > 0 ? right : 0;
  const lib = auth < 0 ? -auth : 0;
  auth = auth > 0 ? auth : 0;

  const authLeft = auth / 2 + left / 2;
  const authRigth = auth / 2 + right / 2;
  const libLeft = lib / 2 + left / 2;
  const libRigth = lib / 2 + right / 2;

  console.log(left, auth);

  if (auth >= 0 && left >= 0) {
    return `rgb(${122 + 122 * authLeft}, ${122 - 122 * authLeft}, ${
      122 - 122 * authLeft
    })`;
  }
  if (auth >= 0 && left <= 0) {
    return `rgb(${122 - 122 * authRigth}, ${122 - 122 * authRigth}, ${
      122 + 122 * authRigth
    })`;
  }
  if (auth <= 0 && left >= 0) {
    return `rgb(122, ${122 + 122 * libLeft}, 122)`;
  }
  if (auth <= 0 && left <= 0) {
    return `rgb(${122 + 122 * libRigth}, ${122 + 122 * libRigth}, 122)`;
  }
}

function shuffleArray<T>(array: T[]) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
