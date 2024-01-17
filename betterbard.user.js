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

function removeElement(selector) {
  document.querySelector(selector).remove();
}

function hideElement(selector) {
  document.querySelector(selector).style.display = 'none';
}

function removeElementByText(text) {
  const element = document.querySelector(`:matches(:not(body)) :has(:contains(${text}))`);
  if(element) element.remove();
}

document.addEventListener('DOMContentLoaded', function() {
  removeElementByText("Bard may display inaccurate");

});
