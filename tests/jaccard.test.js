'use strict';
var expect    = require("chai").expect;
var jaccard = require('../app/index.js');

describe("test", () => {
  it("equal sentence should have score 1", () => {
    var equalSentences = jaccard.jaccardSimilarity("This is test sentence.", "This is test sentence.");
    expect(equalSentences).to.equal(1);
  });

  it("absolutely different sentence should have score 0", () => {
    var absDifferentSentences = jaccard.jaccardSimilarity("My first sentence.", "Absolutely different.");
    expect(absDifferentSentences).to.equal(0);
  });

  it("empty sentence should have score 0", () => {
    var emptySentence = jaccard.jaccardSimilarity("", "Absolutely different.");
    expect(emptySentence).to.equal(0);
  });

  it("partial similar sentence should have score 0.4", () => {
    var partialSimilarity = jaccard.jaccardSimilarity("This is a partial similiar sentence", "This looks like a partial similar sentence but is not.");
    expect(partialSimilarity).to.equal(0.4);
  });
});

