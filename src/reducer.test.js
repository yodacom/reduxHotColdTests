import reducer from "./reducer";
import { newGame, makeGuess, toggleInfoModal } from "./actions";

describe("Reducer", () => {
  it("Create New Game", () => {
    const action = newGame();
    const correctAnswer = action.correctAnswer;
    const state = reducer(null, action);
    expect(state.guesses.length).toEqual(0);
    expect(state.correctAnswer).toEqual(correctAnswer);
    expect(state.feedback).toEqual("Make your guess!");
    expect(state.showInfoModal).toEqual(false);
  });

  it("Create New Game when state not null", () => {
    const action = newGame();
    const correctAnswer = action.correctAnswer;
    const currentState = {
      guesses: [2, 3],
      feedback: "you are hot",
      correctAnswer: Math.round(Math.random() * 100),
      showInfoModal: false
    };
    const state = reducer(currentState, action);
    expect(state.guesses.length).toEqual(0);
    expect(state.correctAnswer).toEqual(correctAnswer);
    expect(state.feedback).toEqual("Make your guess!");
    expect(state.showInfoModal).toEqual(false);
  });

  it("guess should be an integer", () => {
    const action = makeGuess("b");
    const state = reducer(null, action);
    expect(state.feedback).toEqual("Please enter a valid number");
  });

  it("Guess is Ice Cold ", () => {
    const guess = 5;
    const currentState = { correctAnswer: 60, guesses: [] };
    const action = makeGuess(guess);
    const state = reducer(currentState, action);
    expect(state.feedback).toEqual("You're Ice Cold...");
  });

  it("Guess is Cold ", () => {
    const guess = 25;
    const currentState = { correctAnswer: 60, guesses: [] };
    const action = makeGuess(guess);
    const state = reducer(currentState, action);
    expect(state.feedback).toEqual("You're Cold...");
  });

  it("Guess is your warm", () => {
    const guess = 50;
    const currentState = { correctAnswer: 60, guesses: [] };
    const action = makeGuess(guess);
    const state = reducer(currentState, action);
    expect(state.feedback).toEqual("You're Warm...");
  });

  it("Guess is your HOT", () => {
    const guess = 59;
    const currentState = { correctAnswer: 60, guesses: [] };
    const action = makeGuess(guess);
    const state = reducer(currentState, action);
    expect(state.feedback).toEqual("You're Hot!");
  });

  it("Guess is right", () => {
    const guess = 60;
    const currentState = { correctAnswer: 60, guesses: [] };
    const action = makeGuess(guess);
    const state = reducer(currentState, action);
    expect(state.feedback).toEqual("You got it!");
  });
});
