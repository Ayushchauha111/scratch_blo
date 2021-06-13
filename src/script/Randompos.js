
import * as Blockly from 'blockly/core';
Blockly.defineBlocksWithJsonArray([
    // Block for colour picker.
    {
      "type": "ran",
      "message0": "goto %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "VALUE",
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
  
  Blockly.JavaScript['ran'] = function(block) {
    return 'randompos;\n';
  };
  