import { classesJoin, scopeClassMaker } from '../classes';
describe('classes', () => {
  it('接受 1 个 className', function() {
    const result = classesJoin('a');
    expect(result).toEqual('a');
  });
  it('接受 2 个 className', function() {
    const result = classesJoin('a', 'b');
    expect(result).toEqual('a b');
  });
  it('接受 undefined', function() {
    const result = classesJoin('a', undefined);
    expect(result).toEqual('a');
  });
  it('接受中文', function() {
    const result = classesJoin('a', '中文');
    expect(result).toEqual('a 中文');
  });
  it('接受 0 个 className', function() {
    const result = classesJoin();
    expect(result).toEqual('');
  });
  it('添加 scope class 有后缀', function() {
    const result = scopeClassMaker('tui-dialog');
    expect(result('mask')).toEqual('tui-dialog-mask');
  });
  it('添加 scope class 无后缀', function() {
    const result = scopeClassMaker('tui-dialog');
    expect(result()).toEqual('tui-dialog');
  });
  it('添加 scope class 中文', function() {
    const result = scopeClassMaker('tui-dialog');
    expect(result('遮罩层')).toEqual('tui-dialog-遮罩层');
  });
});
