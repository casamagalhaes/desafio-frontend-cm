export const trata = async (req, res, fn, ...param) => {
  try {
    res.send(await fn(...param));
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
};