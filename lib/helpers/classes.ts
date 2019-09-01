// classname join
function classesJoin(...names: (string | undefined)[]) {
  return names.filter(Boolean).join(' ');
}

// classname 生成
function scopeClassMaker(prefix: string) {
  return function(name?: string | boolean) {
    return [prefix, name].filter(Boolean).join('-');
  };
}

export { classesJoin, scopeClassMaker };
