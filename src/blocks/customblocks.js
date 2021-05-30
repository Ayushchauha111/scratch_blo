
import * as Blockly from 'blockly/core';

import '../fields/BlocklyReactField';
import '../fields/DateField';


Blockly.Blocks['test_react_field'] = {
  init: function() {
    this.jsonInit({
      "type": "test_react_field",
      "message0": "move %1 steps",
      "args0": [
        {
          "type": "field_react_component",
          "name": "FIELD",
          "text": " "
        },
      ],
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};

Blockly.Blocks['test_react_date_field'] = {
  init: function() {
    this.jsonInit({
      "type": "test_react_date_field",
      "message0": "date field %1",
      "args0": [
        {
          "type": "field_react_date",
          "name": "DATE",
          "date": "01/01/2020"
        },
      ],
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};

Blockly.Blocks['example_angle'] = {
  
  init: function() {
    
    this.appendDummyInput()
        .appendField('Turn clockwise')
        .appendField(new Blockly.FieldAngle(90), 'FIELDNAME')
        Blockly.FieldAngle.CLOCKWISE = true;
        Blockly.FieldAngle.OFFSET = 0;
        this.setStyle('loop_blocks')
        this.setNextStatement(true, 'Action');
        this.setPreviousStatement(true, 'Action');
  },
};
//write
Blockly.Blocks['example_angle_2'] = {
  
  init: function() {
    this.appendDummyInput()
        .appendField('Turn Anticlockwise')
        .appendField(new Blockly.FieldAngle(90), 'FIELDNAME')
        Blockly.FieldAngle.CLOCKWISE = false;
        this.setStyle('loop_blocks')
        this.setNextStatement(true, 'Action');
        this.setPreviousStatement(true, 'Action');
  },
};

Blockly.Blocks['example_checkbox'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox(true), 'FIELDNAME')
        .appendField('x position');
        this.setStyle('loop_blocks')
        this.setNextStatement(true, 'Action');
        this.setPreviousStatement(true, 'Action');
  }
};
Blockly.Blocks['example_checkbox_2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox(true), 'FIELDNAME')
        .appendField('y position');
        this.setStyle('loop_blocks')
        this.setNextStatement(true, 'Action');
        this.setPreviousStatement(true, 'Action');
  }
};
Blockly.Blocks['example_checkbox_3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox(true), 'FIELDNAME')
        .appendField('Direction');
        this.setStyle('loop_blocks')
        this.setNextStatement(true, 'Action');
        this.setPreviousStatement(true, 'Action');
  }
};


Blockly.Blocks['example_dropdown'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('drop down:')
        .appendField(new Blockly.FieldDropdown([
            ['first item', 'ITEM1'],
            ['second item', 'ITEM2']
        ]), 'FIELDNAME');
  }
};
Blockly.Blocks['example_image'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("image:")
      .appendField(new Blockly.FieldImage(
        "https://www.gstatic.com/codesite/ph/images/star_on.gif",
        15,
        15,
        "*"));
  }
};
Blockly.Blocks['example_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("number:")
        .appendField(new Blockly.FieldNumber(100, 0, 100, 10), 'FIELDNAME');
  }
};
Blockly.Blocks['example_textinput'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("text input:")
        .appendField(new Blockly.FieldTextInput('default text'),
            'FIELDNAME');
  }
};

Blockly.Blocks['example_variable_untyped'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Move')
        .appendField(new Blockly.FieldVariable('x'), 'FIELDNAME')
        .appendField('Steps');
        this.setStyle('loop_blocks')
        this.setNextStatement(true, 'Action');
        this.setPreviousStatement(true, 'Action');
  }
  
};