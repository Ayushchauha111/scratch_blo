
import React from 'react';
import ReactDOM from 'react-dom';

import * as Blockly from 'blockly/core';

class MoveSteps extends Blockly.Field {

  SERIALIZABLE = true
  
  static fromJson(options) {
    return new MoveSteps(options['text']);
  }

  showEditor_() {
    this.div_ = Blockly.DropDownDiv.getContentDiv();
    ReactDOM.render(this.render(),
      this.div_);

    var border = this.sourceBlock_.getColourBorder();
    border = border.colourBorder || border.colourLight;
    Blockly.DropDownDiv.setColour(this.sourceBlock_.getColour(), border);

    Blockly.DropDownDiv.showPositionedByField(
      this, this.dropdownDispose_.bind(this));
  }

  dropdownDispose_() {
    ReactDOM.unmountComponentAtNode(this.div_);
  }

  render() {
    return <FieldRenderComponent />
  }
}


class FieldRenderComponent extends React.Component {

    render() {
      return <div style={{ color: '#fff' }}>
        Hey Ayush
          </div>;
    }
  }

Blockly.fieldRegistry.register('input_value', MoveSteps);

export default MoveSteps;