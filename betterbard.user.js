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
  const element = doc.querySelector(`:matches(:not(body)) :has(:contains(${text}))`);
  if(element) element.remove();
}

doc.addEventListener('DOMContentLoaded', function() {
  removeElementByText("Bard may display inaccurate");

});
