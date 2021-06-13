
import * as Blockly from 'blockly/core';
Blockly.defineBlocksWithJsonArray([
    // Block for colour picker.
    {
      "type": "xpos",
      "message0": "%1 x position",
      "args0": [
        {
          "type": "field_Checkbox",
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
  
  Blockly.JavaScript['xpos'] = function(block) {
    var value1 = '\'' + block.getFieldValue('X') + '\'';
    return '' + value1  +';\n';
  };
  
  Blockly.defineBlocksWithJsonArray([
    // Block for colour picker.
    {
      "type": "ypos",
      "message0": "%1 y position",
      "args0": [
        {
          "type": "field_Checkbox",
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
  
  Blockly.JavaScript['ypos'] = function(block) {
    var value1 = '\'' + block.getFieldValue('X') + '\'';
    return '' + value1 +';\n';
  };
  
  Blockly.defineBlocksWithJsonArray([
    // Block for colour picker.
    {
      "type": "dir",
      "message0": "%1 direction",
      "args0": [
        {
          "type": "field_Checkbox",
          "name": "X",
        },

      ],
      "colour": 400,
      "tooltip": "",
      "helpUrl": ""
    }
  ]);
  
  Blockly.JavaScript['dir'] = function(block) {
    var value1 = '\'' + block.getFieldValue('X') + '\'';
    return '' + value1 +';\n';
  };
  
  