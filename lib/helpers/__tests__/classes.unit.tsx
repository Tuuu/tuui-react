import { classesJoin } from '../classes';
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
});
