export function personUpdate(data) {
  if (data.gender === 'female') {
    if ('age' in data) {
      delete data.age;
    }
  } else if (data.gender === 'male') {
    if (!('income' in data)) {
      data.income = 100000;
    }
  }
  return data;
}

export function objectFieldsList(obj1, obj2, obj3) {
  const fields = new Set();

  [obj1, obj2, obj3].forEach(obj => {
    Object.keys(obj).forEach(key => fields.add(key));
  });

  return Array.from(fields).sort();
}

export function objectClone(obj, count) {
  const clones = [];

  for (let i = 0; i < count; i++) {
    const clone = JSON.parse(JSON.stringify(obj));
    clone.id = i + 1;
    clones.push(clone);
  }

  return clones;
}