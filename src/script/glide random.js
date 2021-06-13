
import * as Blockly from 'blockly/core';
Blockly.defineBlocksWithJsonArray([
    // Block for colour picker.
    {
      "type": "glide",
      "message0": "glide %1 secs to %2",
      "args0": [
        {
          "type": "field_input",
          "name": "X",
        },
        {
            "type": "field_dropdown",
            "name": "Val",
            "options": [
              ["Random position", "sounds/c4.m4a"],
              ["Mouse Pointer", "sounds/d4.m4a"],
            ]
          }

      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 400,
      "tooltip": "",
      "helpUrl": ""
    }
  ]);
  
  Blockly.JavaScript['glide'] = function(block) {
    var value1 = '\'' + block.getFieldValue('X') + '\'';
    var value2 = '\'' + block.getFieldValue('Val') + '\'';
    return '' + value1 + value2 +';\n';
  };
  Blockly.defineBlocksWithJsonArray([
    // Block for colour picker.
    {
      "type": "glide2",
      "message0": "glide %1 secs to x:%2 y:%3",
      "args0": [
        {
          "type": "field_input",
          "name": "seconds",
        },
        {
            "type": "field_input",
            "name": "X",
          },
          {
            "type": "field_input",
            "name": "Y",
          },

      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 400,
      "tooltip": "",
      "helpUrl": ""
    }
  ]);
  
  Blockly.JavaScript['glide2'] = function(block) {
    var value1 = '\'' + block.getFieldValue('seconds') + '\'';
    var value2 = '\'' + block.getFieldValue('X') + '\'';
    var value3 = '\'' + block.getFieldValue('Y') + '\'';
    return '' + value1 + value2 +value3 +';\n';
  };