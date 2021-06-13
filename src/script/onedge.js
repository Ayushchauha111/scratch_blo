
import * as Blockly from 'blockly/core';
Blockly.defineBlocksWithJsonArray([
    // Block for colour picker.
    {
      "type": "edge",
      "message0": "if on edge, bounce",
      "previousStatement": null,
      "nextStatement": null,
      "colour": 400,
      "tooltip": "",
      "helpUrl": ""
    }
  ]);
  
  Blockly.JavaScript['edge'] = function(block) {
     return 2+3;
  };
  