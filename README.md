# Measuring similarity of sentences

The Jaccard Index itself calculates the similarity/diversity of two sample sets. 

This module measure the similarity between senteces, based on the words in common (some of the stop words are excluded). 

It is build on top of the ["Natural" module](https://github.com/NaturalNode/natural) - library for natural language processing.

The result should be between 0 and 1.

[<img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/eaef5aa86949f49e7dc6b9c8c3dd8b233332c9e7">](https://en.wikipedia.org/wiki/Jaccard_index)

You can find more information about the algorithm on [Wikipedia](https://en.wikipedia.org/wiki/Jaccard_index)
## Example

**Input**:

"This is one sentence."

"This is another sentence."

**Result**: 0.6

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
