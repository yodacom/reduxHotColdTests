import {MAKE_GUESS, makeGuess} from "./actions.js";
import {TOGGLE_INFO_MODAL, toggleInfoModal} from "./actions.js";
import {NEW_GAME, newGame} from "./actions.js";


describe("Make Guess Action", () => {
  it("returns guess action object", () => {
    const guess = 5;
    const action = makeGuess(guess);
    expect(action.type).toEqual(MAKE_GUESS);
    expect(action.guess).toEqual(guess);
  })
})

describe("Modal Toggle", () => {
  it("modify object", () => {
    const action = toggleInfoModal() ;
    expect(action.type).toEqual(TOGGLE_INFO_MODAL);
    })
  })

describe("Create New Game", () => {
  it("generates new correct answer", () => {
    const action = newGame();
    expect (action.type).toEqual(NEW_GAME);
    expect(action.correctAnswer).toBeGreaterThanOrEqual(0);
    expect(action.correctAnswer).toBeLessThanOrEqual(100);
  })
})
