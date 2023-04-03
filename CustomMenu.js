{\rtf1\ansi\ansicpg1252\cocoartf2708
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const form = document.querySelector('form');\
const menu = document.querySelector('#menu');\
\
form.addEventListener('submit', function(event) \{\
  event.preventDefault();\
\
  const appetizer = document.querySelector('#appetizer').value;\
  const entree = document.querySelector('#entree').value;\
  const dessert = document.querySelector('#dessert').value;\
  const drink = document.querySelector('#drink').value;\
\
  const menuHTML = `\
    <h2>Your Custom Menu:</h2>\
    <ul>\
      <li>Appetizer: $\{appetizer\}</li>\
      <li>Entree: $\{entree\}</li>\
      <li>Dessert: $\{dessert\}</li>\
      <li>Drink: $\{drink\}</li>\
    </ul>\
  `;\
\
  menu.innerHTML = menuHTML;\
\});\
}