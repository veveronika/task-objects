export function personUpdate(data) {
  const result = { ...data };

  if (result.gender === 'female') {
    delete result.age;
  } else if (result.gender === 'male') {
    if (!('income' in result)) {
      result.income = 100000;
    }
  }

  return result;
}

export function objectFieldsList(obj1, obj2, obj3) {
  const keysSet = new Set([
    ...Object.keys(obj1),
    ...Object.keys(obj2),
    ...Object.keys(obj3),
  ]);
  return Array.from(keysSet).sort();
}

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function objectClone(obj, count) {
  const clones = [];
  for (let i = 0; i < count; i++) {
    const clone = deepClone(obj);
    clone.id = i;
    clones.push(clone);
  }
  return clones;
}
