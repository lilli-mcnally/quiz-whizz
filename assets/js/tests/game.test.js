/**
 * @jest-environment jsdom
 */

const {
    expect
} = require("@jest/globals");
const {
    game
} = require("../game");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("game.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game object contains correct keys", () => {
    test("one key exists", () => {
        expect("one" in game).toBe(true);
    })
    test("two key exists", () => {
        expect("two" in game).toBe(true);
    })
    test("three key exists", () => {
        expect("three" in game).toBe(true);
    })
    test("four key exists", () => {
        expect("four" in game).toBe(true);
    })
    test("questions key exists", () => {
        expect("questions" in game).toBe(true);
    })
    test("answers key exists", () => {
        expect("answers" in game).toBe(true);
    })
    test("index key exists", () => {
        expect("index" in game).toBe(true);
    })
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    })
    test("correct key exists", () => {
        expect("correct" in game).toBe(true);
    })
    test("selected key exists", () => {
        expect("selected" in game).toBe(true);
    })
});