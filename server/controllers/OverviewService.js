exports.getOverview = (args, res, next) => {
  /**
   * Returns an overview of the stats for a given backend.
   *
   * returns Overview
   **/
  const examples = {};
  examples['application/json'] = {
  "kills" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

