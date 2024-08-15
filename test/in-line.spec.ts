import { it, expect, describe } from 'vitest'
import { addTodo, fighting } from '../index.ts'
// 缺点
// 1. 重复代码
// 2. 当 given 逻辑复杂的时候 就会导致单元测试可读性变差   -> 测试 as 文档
describe("内联", () => {
  it("normal Todo", () => {
    // given
    const todo = {
      title: "吃饭",
      content: "今天要和小明去吃饭"
    }
    // when
    addTodo(todo)

    // then
    expect(todo[0]).toEqual(todo)
  })
  it("addTodo with top command Todo", () => {
    // given
    const todo = {
      title: "top: 吃饭",
      content: "今天要和小明去吃饭"
    }
    // when
    addTodo(todo)

    // then
    expect(todo[0]).toEqual(todo)
  })
  it("难以理解的 given", () => {
    // given
    const userA = {
      name: "aaa",
      age: 18
    }
    const userB = {
      name: "bbb",
      age: 18
    }
    const userC = {
      name: "ccc",
      age: 18
    }
    const playerA = new Player(new Weapons("冲锋枪"))
    playerA.life = 3
    playerA.attack = () => {
      return 3
    }
    const playerB = new Player(new Weapons("手枪"))
    playerB.life = 3
    playerB.attack = () => {
      return 3
    }
    // when
    fighting(playerA, playerB, [userA, userB, userC])
    // then
    // expect()
  })
})