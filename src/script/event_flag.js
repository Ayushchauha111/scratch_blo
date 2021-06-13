
import * as Blockly from 'blockly/core';
Blockly.defineBlocksWithJsonArray([
    // Block for colour picker.
    {
      "type": "flg",
      "message0": "when FLAG clicked",
      "nextStatement": null,
      "colour": 150,
      "tooltip": "",
      "helpUrl": ""
    }
  ]);
  
  Blockly.JavaScript['flg'] = function(block) {
    
    return 'flag clicked';
  };