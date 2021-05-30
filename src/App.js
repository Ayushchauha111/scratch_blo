// import library from 'google-closure-library'
import React from 'react';
import './App.css';
import BlocklyComponent, { Block, Value, Field, Shadow } from './Blockly';
import BlocklyJS from 'blockly/javascript';
import Old from './component/side'
import Sprite from './component/CatSprite'
import './blocks/customblocks';
import './generator/generator';
import PreviewArea from './com/PreviewArea'
import CatSprite from './component/CatSprite';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.simpleWorkspace = React.createRef();
  }

  generateCode = () => {
    var code = BlocklyJS.workspaceToCode(
      this.simpleWorkspace.current.workspace
    );
    console.log(code);
  }

  render() {
    console.log(this.generateCode)
    return (
      // <div >
      //   <div>
      //     <Sprite />
      //     </div>
      //     <div>
      //    
      //     </div>
      // </div>
      <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
        <BlocklyComponent onClick={this.generateCode} ref={this.simpleWorkspace}
          readOnly={false} trashcan={true} media={'media/'}
          move={{
            scrollbars: true,
            drag: true,
            wheel: true
          }}
          >
            <Block type='example_variable_untyped' />
            <Block type="example_angle" />
            <Block type="example_angle_2" />
            <Block type="example_checkbox" />
            <Block type="example_checkbox_2" />
            <Block type="example_checkbox_3" />
            {/* <Block type="test_react_date_field" /> */}
            {/* <Block type="controls_ifelse" /> */}
            {/* <Block type="logic_compare" />
            <Block type="logic_operation" />
            <Block type="logic_negate" />
            <Block type="logic_boolean" />
            <Block type="logic_null" />
            <Block type="logic_ternary" />
            <Block type="text_charAt"> */}
              {/* <Value name="VALUE">
                <Block type="variables_get">
                  <Field name="VAR">text</Field>
                </Block>
              </Value>
            </Block> */}
            <Block type="controls_repeat_ext">
              <Value name="TIMES">
                <Shadow type="math_number">
                  <Field name="NUM">10</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="controls_repeat_ext">
            </Block>
          </BlocklyComponent>
        </div>
          <div >
          <CatSprite />
        </div>
      </div>
    </div>
    );
  }
}

export default App;
