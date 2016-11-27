'use strict';

var jaccard = require ('./index.js');

var sentence1 = 'A directive is a class with directive metadata.';
var sentence2 = 'In TypeScript, apply the @Directive decorator to attach metadata to the class.';

var f = new jaccard.jaccardSimilarity(sentence1, sentence2);


