import { assert, expect } from "chai";
import installOwnCreateElement from "./jsxCreateElement";

let SearchResultsView;
const X = TEST_PREFIX;
try{
  SearchResultsView = require("../src/views/"+X+"searchResultsView.js").default;
} catch(e){};

describe("TW2.3 SearchResultsView", function() {
  this.timeout(200000);

  before(function(){
    if(!SearchResultsView) this.skip();
  });

  const searchResults = [
    {
      "id": 587203,
      "title": "Taco Pizza",
      "readyInMinutes": 20,
      "servings": 6,
      "sourceUrl": "https://laurenslatest.com/taco-salad-pizza-with-doritos/",
      "openLicense": 0,
      "image": "Taco-Salad-Pizza-with-Doritos-587203.jpg"
    },
    {
      "id": 559251,
      "title": "Breakfast Pizza",
      "readyInMinutes": 25,
      "servings": 6,
      "sourceUrl": "http://www.jocooks.com/breakfast-2/breakfast-pizza/",
      "openLicense": 0,
      "image": "Breakfast-Pizza-559251.jpg"
    },
    {
      "id": 556121,
      "title": "Easy Vegetarian Sausage Basil Pizza",
      "readyInMinutes": 30,
      "servings": 4,
      "sourceUrl": "https://dizzybusyandhungry.com/cashew-sausage-basil-pizza/",
      "openLicense": 0,
      "image": "Cashew-Sausage-Basil-Pizza-556121.png"
    }
  ];

  function setUpView(){
    installOwnCreateElement();
    SearchResultsView({searchResults: searchResults});
  }

  it("SearchResultsView renders div", function() {
    setUpView()
    assert(window.lastJSXRender.tag)
    expect(window.lastJSXRender.tag).to.equal("div");
  });

  it("SearchResultsView renders span for each search result", function() {
    setUpView()
    assert(window.lastJSXRender.children)
    expect(window.lastJSXRender.children[0].length).to.equal(3);
    window.lastJSXRender.children[0].forEach(child => {
      assert(child.tag);
      expect(child.tag).to.equal("span");
    });
  });

  it("SearchResultsView renders only image and title for each span", function() {
    setUpView()
    window.lastJSXRender.children[0].forEach((child, i) => {
      assert(child.children);
      expect(child.children.length).to.equal(2);
      assert(child.children[0].tag);
      expect(child.children[0].tag).to.equal("img");
      assert(child.children[1].tag);
      expect(child.children[1].tag).to.equal("div");
    });
  });

  it("SearchResultsView renders images correctly", function() {
    setUpView()
    window.lastJSXRender.children[0].forEach((child, i) => {
      let image = child.children[0];
      assert(image.props);
      assert(image.props.src);
      expect(image.props.src).to.equal("https://spoonacular.com/recipeImages/" + searchResults[i].image);
      assert(image.props.height);
      expect(image.props.height).to.equal("100");
    });
  });

  it("SearchResultsView renders titles correctly", function() {
    setUpView()
    window.lastJSXRender.children[0].forEach((child, i) => {
      let title = child.children[1];
      assert(title.children);
      expect(title.children.length).to.equal(1);
      expect(title.children[0]).to.equal(searchResults[i].title);
    });
  });
});