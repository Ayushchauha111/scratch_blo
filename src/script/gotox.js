
import * as Blockly from 'blockly/core';
Blockly.defineBlocksWithJsonArray([
    // Block for colour picker.
    {
      "type": "gotoxy",
      "message0": "goto x:%1 y:%2",
      "args0": [
        {
          "type": "field_input",
          "name": "X",
        },
        {
            "type": "field_input",
            "name": "Y",
          }

      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 400,
      "tooltip": "",
      "helpUrl": ""
    }
  ]);
  
  Blockly.JavaScript['gotoxy'] = function(block) {
    var value1 = '\'' + block.getFieldValue('X') + '\'';
    var value2 = '\'' + block.getFieldValue('Y') + '\'';
    return '' + value1 + value2 +';\n';
  };
  