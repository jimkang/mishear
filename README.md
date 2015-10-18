mishear
=======

Finds possible mishearings for a given word.

Installation
------------

    npm install mishear

(This can take a while because its dependencies need to build a few databases.)

Usage
-----

    var createMishear = require('mishear');
    var mishear = createMishear();

    mishear('running', logMishearings);

    function logMishearings(error, words) {
      if (error) {
        console.log(error);
      }
      else {
        console.log(words);
      }
    }

Output:

    ['RUINING', 'RAINING', 'REIGNING', 'RENEWING']

You can pass to `createMishear` an instance of [probable](https://github.com/jimkang/probable) that is configured the way you want. This is useful for producing deterministic results for tests.

You can try running it from a terminal by running `node tools/run-mishear.js <your word here>`.

Tests
-----

Run tests with `make test`.

License
-------

The MIT License (MIT)

Copyright (c) 2015 Jim Kang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
