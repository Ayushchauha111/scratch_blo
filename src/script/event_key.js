
import * as Blockly from 'blockly/core';
Blockly.defineBlocksWithJsonArray([
    // Block for colour picker.
    {
      "type": "key",
      "message0": "when %1 key pressed",
      "args0": [
        {
            "type": "field_dropdown",
            "name": "X",
            "options": [
            ['space','space'],
            [ 'up arrow','space'],
            [ 'down arrow','space'],
            [ 'right arrow','left arrow'],
             [ 'left arrow','left arrow'],
              [ 'any','left arrow'],
              ['a', 'a'],
              ['b', 'b'],
              ['c', 'c'],
              ['d', 'd'],
              ['e', 'e'],
              ['f', 'f'],
              ['g', 'g'],
              ['h', 'h'],
              ['i', 'i'],
              ['j', 'j'],
              ['k', 'k'],
              ['l', 'l'],
              ['m', 'm'],
              ['n', 'n'],
              ['o', 'o'],
              ['p', 'p'],
              ['q', 'q'],
              ['r', 'r'],
              ['s', 's'],
              ['t', 't'],
              ['u', 'u'],
              ['v', 'v'],
              ['w', 'w'],
              ['x', 'x'],
              ['y', 'y'],
              ['z', 'z'],
              ['0', '0'],
              ['1', '1'],
              ['2', '2'],
              ['3', '3'],
              ['4', '4'],
              ['5', '5'],
              ['6', '6'],
              ['7', '7'],
              ['8', '8'],
              ['9', '9']
            ]
          }

      ],
      "nextStatement": null,
      "colour": 150,
      "tooltip": "",
      "helpUrl": ""
    }
  ]);
  
  Blockly.JavaScript['key'] = function(block) {
    var value1 = '\'' + block.getFieldValue('X') + '\'';
    return '' + value1  +';\n';
  };


  Blockly.defineBlocksWithJsonArray([
    // Block for colour picker.
    {
      "type": "backdropsw",
      "message0": "when backdrop switches to %1 ",
      "args0": [
        {
            "type": "field_dropdown",
            "name": "X",
            "options": [
            ['backdrop1','backdrop1']
            ]
          }

      ],
      "nextStatement": null,
      "colour": 150,
      "tooltip": "",
      "helpUrl": ""
    }
  ]);
  
  Blockly.JavaScript['backdropsw'] = function(block) {
    var value1 = '\'' + block.getFieldValue('X') + '\'';
    return '' + value1  +';\n';
  };

  Blockly.defineBlocksWithJsonArray([
    // Block for colour picker.
    {
      "type": "spritecli",
      "message0": "when this sprite clicked",
      "nextStatement": null,
      "colour": 150,
      "tooltip": "",
      "helpUrl": ""
    }
  ]);
  
  Blockly.JavaScript['spritecli'] = function(block) {
    var value1 = '\'' + block.getFieldValue('X') + '\'';
    return '' + value1  +';\n';
  };

  Blockly.defineBlocksWithJsonArray([
    // Block for colour picker.
    {
      "type": "loudtimer",
      "message0": "when  %1 > %2 ",
      "args0": [
        {
            "type": "field_dropdown",
            "name": "X",
            "options": [
                ['loudness','loudness'],
                ['timer','timer']
                ]
          },
          {
              "type":"field_input",
              "name":"y"
          }

      ],
      "nextStatement": null,
      "colour": 150,
      "tooltip": "",
      "helpUrl": ""
    }
  ]);
  
  Blockly.JavaScript['loudtimer'] = function(block) {
    var value1 = '\'' + block.getFieldValue('X') + '\'';
    var value2 = '\'' + block.getFieldValue('Y') + '\'';
    return '' + value1 + value2 +';\n';
  };
  

  Blockly.defineBlocksWithJsonArray([
    // Block for colour picker.
    {
      "type": "control_repeat",
      "message0": "when  %1 > %2 ",
      "args0": [
        {
            "type": "field_dropdown",
            "name": "X",
            "options": [
                ['loudness','loudness'],
                ['timer','timer']
                ]
          },
          {
              "type":"field_input",
              "name":"y"
          }

      ],
      "nextStatement": null,
      "colour": 150,
      "tooltip": "",
      "helpUrl": ""
    }
  ]);
  
  Blockly.JavaScript['control_repeat'] = function(block) {
    var value1 = '\'' + block.getFieldValue('X') + '\'';
    var value2 = '\'' + block.getFieldValue('Y') + '\'';
    return '' + value1 + value2 +';\n';
  };


//   Blockly.defineBlocksWithJsonArray({
//         "type": "control_repeat",
//         "message0":" heeeeekefmaksgn"
//         // "message1": "%1", // Statement
//         // "message2": "%1", // Icon
//         // "lastDummyAlign2": "RIGHT",
//         // "args0": [
//         //   {
//         //     "type": "input_value",
//         //     "name": "TIMES"
//         //   }
//         // ],
//         // "args1": [
//         //   {
//         //     "type": "input_statement",
//         //     "name": "SUBSTACK"
//         //   }
//         // ],
//         // "args2": [
//         //   {
//         //     "type": "field_image",
//         //     // "src": Blockly.mainWorkspace.options.pathToMedia + "repeat.svg",
//         //     "width": 24,
//         //     "height": 24,
//         //     "alt": "*",
//         //     "flip_rtl": true
//         //   }
//         // ],
//         ,
//         "nextStatement": null,
//         "colour": 150,
//         "tooltip": "",
//         "helpUrl": ""
//       });