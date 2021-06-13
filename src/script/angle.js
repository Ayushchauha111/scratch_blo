
import * as Blockly from 'blockly/core';
Blockly.defineBlocksWithJsonArray([
    // Block for colour picker.
    {
      "type": "clock",
      "message0": "turn clock %1 degrees",
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
  
  Blockly.JavaScript['clock'] = function(block) {
    var value1 = '\'' + block.getFieldValue('X') + '\'';
    return '' + value1 +';\n';
  };
  

  Blockly.defineBlocksWithJsonArray([
    // Block for colour picker.
    {
      "type": "anti",
      "message0": "turn anticlock %1 degrees",
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
  
  Blockly.JavaScript['anti'] = function(block) {
    var value1 = '\'' + block.getFieldValue('X') + '\'';
    return '' + value1  +'';
  };
  