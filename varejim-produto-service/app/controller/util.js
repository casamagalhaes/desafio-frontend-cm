export const trata = async (req, res, fn, ...param) => {
  try {
    let response = await fn(...param);
    res.send(JSON.stringify(response));
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
};
