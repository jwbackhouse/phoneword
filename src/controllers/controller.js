const { validationResult } = require('express-validator');

exports.converter = (req, res) => {
  // Handle errors from express-validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  const input = req.params.query;

  let init = map[input[0]].split('');
  let output = [];

  for (let i = 1; i < input.length; i++) {
    output = [];
    let letters = map[input[i]];

    // Handle 'empty numbers' (0 & 1)
    if (letters === '') {
      continue;
    }

    // Handle leading 'empty numbers'
    if (init.length === 0) {
      for (let letter of letters) {
        output.push(letter);
      }
    } else {
      for (let initStr of init) {
        for (let letter of letters) {
          output.push(initStr + letter);
        }
      }
    }

    init = output;
  }
  res.send(init);
};
