# Measuring similarity of sentences

The Jaccard Index itself calculates the similarity/diversity of two sample sets. 

This module measure the similarity between senteces, based on the words in common (some of the stop words are excluded). 

The result should be between 0 and 1.

[<img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/eaef5aa86949f49e7dc6b9c8c3dd8b233332c9e7">](https://en.wikipedia.org/wiki/Jaccard_index)

You can find more information about the algorithm on [Wikipedia](https://en.wikipedia.org/wiki/Jaccard_index)
## Example

**Input**:

"This is one sentence."

"This is another sentence."

**Result**: 0.6

##Pre-installation 

This module is build on top of the ["Natural" module](https://github.com/NaturalNode/natural) - library for natural language processing.

You need to run:

```
npm install natural
```

##Installation
```
npm install jaccard-similarity-sentences
```
##Usage
```
var jaccard = require ('jaccard-similarity-sentences');

var sentence1 = 'This is one sentence.';
var sentence2 = 'This is another sentence.';

var measure = jaccard.jaccardSimilarity(sentence1, sentence2);

console.log(measure);
```


# License

MIT

## License Natural

Copyright (c) 2011, 2012 Chris Umbel, Rob Ellis, Russell Mull

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
