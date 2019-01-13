const common = {};

const dataSets = { common };

const data = {};
Object.keys(dataSets).map(key => {
  data[key] = dataSets[key];
});

export { data };