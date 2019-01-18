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

import logoImage from "../img/logo.png";
import colors from "../resources/colors";
const { height, width } = Dimensions.get("window");
export default class MyDrawListItem extends React.PureComponent {

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
                <Text style={{color:'white', fontSize: 30}}>{this.props.betnumber? this._getChar(this.props.betnumber,0) : 0}</Text>
              </View>
              <View style={itemStyles.circleimage}>
                <Text style={{color:'white', fontSize: 30}}>{this.props.betnumber? this._getChar(this.props.betnumber,1) : 0}</Text>
              </View>
              <View style={itemStyles.circleimage}>
                <Text style={{color:'white', fontSize: 30}}>{this.props.betnumber? this._getChar(this.props.betnumber,2) : 0}</Text>
              </View>
            </View>
            <Text style={itemStyles.itemDescriptionStyle}>
              Bet Amount {this.props.betamount}
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
    backgroundColor: colors.whiteColor,
  },
  rightpanel: {
    paddingLeft: width/40,
  },
  leftpanel: {
    alignItems: "center",
    justifyContent: "center",
    padding: width/40,
  },
  logoimage: {
    height: 70,
    width: 70,
    flex: 1,    
  },
  circleimage: {
    height: height/10,
    width: width/6,
    borderRadius: 40,
    backgroundColor:'#ff00ff',
    justifyContent: 'center',
    alignItems: 'center',
    margin:width/30,
    padding:width/30

  },
  itemStyle: {
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
