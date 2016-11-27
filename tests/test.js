'use strict';
var expect    = require("chai").expect;
var jaccard = require('../app/index.js');

var sentence1 = 'A directive is a class with directive metadata.';
var sentence2 = 'In TypeScript, apply the @Directive decorator to attach metadata to the class.';

describe("test", function() {
	it("similarity of senteces", function() {
		var equalSentences = jaccard.jaccardSimilarity("This is test sentence.", "This is test sentence.");
		var absDifferentSentences = jaccard.jaccardSimilarity("My first sentence.", "Absolutely different.");
		var emptySentence = jaccard.jaccardSimilarity("", "Absolutely different.");
		var partialSimilarity = jaccard.jaccardSimilarity("A directive is a class with directive metadata.", "In TypeScript, apply the @Directive decorator to attach metadata to the class.");

		expect(equalSentences).to.equal(1);
		expect(absDifferentSentences).to.equal(0);
		expect(emptySentence).to.equal(0);
		expect(partialSimilarity).to.equal(0.25);
	}) 
});

