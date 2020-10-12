exports.converter = (req, res) => {
  const map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  const input = req.body.input;

  if (input.length === 0) res.send({ error: 'Please try again.' });

  let init = map[input[1]].split('');
  let output = [];
  let i = 1;

  for (i; i < input.length; i++) {
    output = [];
    let letters = map[input[i]];

    // Handle numbers 0 & 1
    if (letters === '') {
      continue;
    }

    for (let initStr of init) {
      console.log('inner loop')
      for (let letter of letters) {
        output.push(initStr + letter);
      }
    }

    init = output;
  }
  res.send(init);
};
