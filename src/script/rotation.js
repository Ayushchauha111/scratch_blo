
import * as Blockly from 'blockly/core';
Blockly.defineBlocksWithJsonArray([
    // Block for colour picker.
    {
      "type": "rotate",
      "message0": "set rotation style %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "X",
          "options": [
            ["left-right", "sounds/c4.m4a"],
            ["don't rotate", "sounds/d4.m4a"],
            ["all around",""],
          ]
        },
        
      

      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 400,
      "tooltip": "",
      "helpUrl": ""
    }
  ]);
  
  Blockly.JavaScript['rotate'] = function(block) {
    var value1 = '\'' + block.getFieldValue('X') + '\'';
    return '' + value1 +';\n';
  };
  