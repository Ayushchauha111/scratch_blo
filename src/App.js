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
import './script/sound_blocks'
import './script/Randompos'
import './script/gotox'
import './script/glide random'
import './script/changeandset'
import './script/rotation'
import './script/onedge'
import './script/move'
import './script/Directions'
import './script/angle'
import './script/event_flag'
import './script/event_key'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.simpleWorkspace = React.createRef();
  }
  
  generateCode = () => {
    var code = BlocklyJS.workspaceToCode(
      this.simpleWorkspace.current.workspace
    );
    // console.log(BlocklyJS.getWorkspaceSVG())
    console.log(code)
  }

  render() {
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
        <div>
          <button onClick={this.generateCode}>hey</button>
        </div>
      <div className="h-screen overflow-hidden flex flex-row  ">
  
       
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
       
        <BlocklyComponent  ref={this.simpleWorkspace}
          readOnly={false} trashcan={true} media={'media/'}
          move={{
            scrollbars: true,
          }}
          >
            
    <category name="Motion" colour="400" >
    <Block type='move' />
    <Block type='clock' />
    <Block type='anti' />
    <Block type="ran"></Block>
    <Block type="gotoxy"></Block>
    <Block type="glide"></Block>
    <Block type="glide2"></Block>
    <Block type="changex"></Block>
    <Block type="setx"></Block>
    <Block type="changey"></Block>
    <Block type="sety"></Block>
    <Block type="edge"></Block>
    <Block type="rotate"></Block>
    <Block type="xpos"></Block>
    <Block type="ypos"></Block>
    <Block type="dir"></Block>
  </category>
  <category name="Looks" colour="170">
  
           
  </category>
  <category name="Controls" colour="70">
<Block type="control_repeat"></Block>
<Block type="controls_repeat_ext">
              <Value name="TIMES">
                <Shadow type="math_number">
                  <Field name="NUM">10</Field>
                </Shadow>
              </Value>
            </Block>
            
  </category>
  <category name="Events" colour="150">
  <Block type="flg"></Block>
  <Block type="key"></Block>
  <Block type="spritecli"></Block>
  <Block type="backdropsw"></Block>
  <Block type="loudtimer"></Block>
  
  </category>
  <category name="Sounds" colour="170">
    <Block type="play_sound"></Block>
  </category>

            
            
            
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
