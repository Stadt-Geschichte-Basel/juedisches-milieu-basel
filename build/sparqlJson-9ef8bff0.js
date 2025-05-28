function sparqlJson(url, query) {
  const params = new URLSearchParams({ query: query });
  const controller = new AbortController();
  const signal = controller.signal;
  const promise = new Promise(async (resolve) => {
    try {
      const res = await fetch(`${url}?${params}`, {
        method: 'GET',
        headers: {
          Accept: 'application/sparql-results+json',
        },
        redirect: 'follow',
        signal,
      });
      const data = await res.json();
      resolve(data);
    }
    catch (ex) {
      if (isAbortError(ex)) {
        console.log(ex.message);
      }
      else {
        console.log(ex);
      }
    }
  });
  promise.cancel = () => controller.abort();
  return promise;
}
function isAbortError(error) {
  if (error && error.name === 'AbortError') {
    return true;
  }
  return false;
}

export { sparqlJson as s };

//# sourceMappingURL=sparqlJson-9ef8bff0.js.map