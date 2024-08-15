import { it, expect, describe } from 'vitest'
import { addTodo, State, fighting } from '../index.js'
// 解决问题
// 1. 代码重复的问题
// 2. 可读性的问题
// 工厂函数
function createTodo(title: string, content: string = "这是一个 todo 的内容") {
  return {
    title,
    content,
    state: State.active
  }
}
describe("委托", () => {
  it("normal Todo", () => {
    // given
    const todo = createTodo("吃饭")
    // when
    addTodo(todo)

    // then
    expect(todo[0]).toEqual(todo)
  })
  it("addTodo with top command Todo", () => {
    // given
    const todo = createTodo("吃饭", "ddd")
    // when
    addTodo(todo)

    // then
    expect(todo[0]).toEqual(todo)
  })
  it("难以理解的 given", () => {
    // 简单容易理解 可读性要高
    // todo 需要一个更贴切的 case
    // given
    const { playerA, playerB, users } = createPlayerAndUsers()

    // when
    fighting(playerA, playerB, users)
    // then
    expect(playerA.life).toBe(3)
  })
})

function createPlayerAndUsers() {
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
  return { playerA, playerB, users: [userA, userB, userC] }
}