function add(a:number, b:number) {
  return a + b
}

describe('第一个测试用例', () => {
  it('should add(1,2) 等于 3', () => {
    expect(add(1, 2)).toEqual(3)
  })
})