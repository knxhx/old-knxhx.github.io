// Mostly unused now in favor of "set" in nunjucks directly
const common = {};

const dataSets = { common };

const data = {};
Object.keys(dataSets).map(key => {
  data[key] = dataSets[key];
});

export { data };