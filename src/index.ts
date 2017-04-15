const foo = [
  'Alpha',
  'beta',
  'Gamma',
  'delta'
];
foo.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
foo.forEach(x => console.log(x));
