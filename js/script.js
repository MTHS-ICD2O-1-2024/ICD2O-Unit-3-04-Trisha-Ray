// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Trisha Ray
// Created on: April 2025
// This file contains the JS functions for index.html

"use strict"

function calculateVolumeOfSphere () {
  // input
  const radius = parseFloat(document.getElementById('radius').value);

  // process
  const volumeOfSphere = 4/3 * Math.PI * (radius * radius * radius);

  // output
  document.getElementById('volume').innerHTML = 'Volume is: ' + volumeOfSphere + ' mm³'
}

