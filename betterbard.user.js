// ==UserScript==
// @name       Better Bard
// @namespace  https://github.com/insign/betterbard
// @version    0.1
// @description Make Google Bard a little better and clean
// @match      https://bard.google.com/*
// @copyright  Hélio <insign@gmail.com>
// @grant GM_addStyle
// ==/UserScript==

'use strict';

const doc = document;

function hideElement(selector) {
  doc.querySelector(selector).style.display = 'none';
}

function removeElementByText(text) {
  const xpath   = "//*[contains(text(), '" + text + "')]"
  const result  = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
  const element = result.singleNodeValue

  if (element) {
    element.remove()
  }

}

doc.addEventListener('DOMContentLoaded', function () {
  setTimeout(() => {
    removeElementByText("Bard may display inaccurate");
  }, 1000)
});
