/**
 * Created by Kash.C on 10/29/18.
 */

// @flow
import React from "react";
import {
  Text,
  TouchableHighlight,
  View,
  Image,
  Dimensions
} from "react-native";
import consts from "../const";
//import circleImage from "../images/circle.png";
import logoImage from "../img/logo.png";
const { height, width } = Dimensions.get("window");
export default class DrawResultListItem extends React.PureComponent {
  _onPress = () => {
  };

  _getChar = (string,index) => {
    return string.split('')[index];
  };

  render() {
    return (
      <TouchableHighlight onPress={this._onPress}>
        <View style={itemStyles.itemStyle} {...this.props}>
          <View style={itemStyles.rightpanel}>
            <Image
              style={itemStyles.logoimage}
              resizeMode='center'
              source={logoImage}
            />
          </View>
          <View style={itemStyles.leftpanel}>
            <Text style={itemStyles.itemTitleStyle}>{this.props.drawtime}  {this.props.drawdate}</Text>
            <View style={itemStyles.container}>
              <View style={itemStyles.circleimage}>
                <Text style={{color:'white', fontSize: 30}}>{this.props.result? this._getChar(this.props.result,0): 0}</Text>
              </View>
              <View style={itemStyles.circleimage}>
                <Text style={{color:'white', fontSize: 30}}>{this.props.result? this._getChar(this.props.result,1): 0}</Text>
              </View>
              <View style={itemStyles.circleimage}>
                <Text style={{color:'white', fontSize: 30}}>{this.props.result? this._getChar(this.props.result,2): 0}</Text>
              </View>
            </View>
            <Text style={itemStyles.itemDescriptionStyle}>
              Winners {this.props.winners}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const itemStyles = {
  container: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // paddingLeft: width / 40,
    // paddingRight: width / 40,
    // paddingTop: width / 40,
    backgroundColor: "#ecf0f1"
  },
  rightpanel: {
    paddingLeft: width/40,
  },
  leftpanel: {
     //flex: 1,
     //flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    padding: width/40,
    //justifyContent: "space-between",
    //paddingLeft: width/30,
    //width: width/2
  },
  logoimage: {
    height: 70,
    width: 70,
    flex: 1,    
  },
  circleimage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor:'#ff00ff',
    justifyContent: 'center',
    alignItems: 'center',
    margin:width/30,
    padding:width/30

  },
  itemStyle: {
    //marginHorizontal: 4,
    borderColor: "lightgrey",
    elevation: 4,
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white"
  },
  itemTitleStyle: {
    color: "black",
    fontSize: 20,
    padding: 10
  },
  itemDescriptionStyle: {
    color: "black",
    fontSize: 17,
    paddingLeft: 10
  }
};
