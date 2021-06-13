
import * as Blockly from 'blockly/core';
Blockly.defineBlocksWithJsonArray([
    // Block for colour picker.
    {
      "type": "move",
      "message0": "move %1 steps",
      "args0": [
        {
          "type": "field_input",
          "name": "X",
        },

      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 400,
      "tooltip": "",
      "helpUrl": ""
    }
  ]);
  
  Blockly.JavaScript['move'] = function(block) {
    var value1 = '\'' + block.getFieldValue('X') + '\'';
    return '' + value1+';\n';
  };
  