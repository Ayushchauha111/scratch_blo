import * as Blockly from 'blockly/core';
Blockly.defineBlocksWithJsonArray([
    // Block for colour picker.
    {
      "type": "changex",
      "message0": "change x by %1",
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
  
  Blockly.JavaScript['changex'] = function(block) {
    var value1 = '\'' + block.getFieldValue('X') + '\'';
    return '' + value1 +';\n';
  };
Blockly.defineBlocksWithJsonArray([
    // Block for colour picker.
    {
      "type": "setx",
      "message0": "set x to %1",
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
  
  Blockly.JavaScript['setx'] = function(block) {
    var value1 = '\'' + block.getFieldValue('X') + '\'';
    return '' + value1  +';\n';
  };
Blockly.defineBlocksWithJsonArray([
    // Block for colour picker.
    {
      "type": "changey",
      "message0": "change y by %1",
      "args0": [
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
  
  Blockly.JavaScript['changey'] = function(block) {
    var value1 = '\'' + block.getFieldValue('Y') + '\'';
    
    return '' + value1 +';\n';
  };
Blockly.defineBlocksWithJsonArray([
    // Block for colour picker.
    {
      "type": "sety",
      "message0": "set y to %1",
      "args0": [
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
  
  Blockly.JavaScript['sety'] = function(block) {
    var value1 = '\'' + block.getFieldValue('Y') + '\'';
    return '' + value1  +';\n';
  };