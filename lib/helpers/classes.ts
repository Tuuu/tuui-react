// classname join
function classesJoin(...names: (string | undefined)[]) {
  return names.filter(Boolean).join(' ');
}

export { classesJoin };
