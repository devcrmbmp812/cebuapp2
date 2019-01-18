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
import { Button } from "native-base";

import strings from "../resources/strings";
import dimens from "../resources/dimens";
import colors from "../resources/colors";
import logoImage from "../img/logo.png";
import coinImage from "../img/coin.jpg";
import dollarImage from "../img/dollar.png";

const { height, width } = Dimensions.get("window");
export default class CreditListItem extends React.PureComponent {
  _onPress = () => {
  };

  _getChar = (string,index) => {
    return string.split('')[index];
  };

  onPayPress = () => {
    
  }

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
            
            
            <View style={itemStyles.container}>
              <Text style={itemStyles.itemTitleStyle}>Coin:</Text>
              
              <Text style={itemStyles.itemTitleStyle}>{this.props.coin}</Text>
              <Image
                style={{width: 20, height: 20}}
                source={coinImage}
              />
              
            </View>
            <View style={itemStyles.container}>
            {/* <Image
                style={{width: 40, height: 40}}
                source={dollarImage}
              /> */}
              <Text style={itemStyles.itemTitleStyle}>{this.props.cash}</Text>
              <Button style={itemStyles.buttonSubmitStyle} onPress={this.onPayPress}>
                <Text style={itemStyles.buttonBoldStyle}>{strings.Pay}</Text>
              </Button>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const itemStyles = {
  buttonBoldStyle: {
    color: "black",
    fontSize: dimens.buttontexxt_size
  },
  buttonSubmitStyle: {
    marginTop: dimens.margin_medium,
    marginHorizontal: dimens.margin_large,
    borderRadius: 20,
    alignSelf: "stretch",
    justifyContent: "center",
    backgroundColor: "white",
    borderColor: colors.circleColor,
    borderWidth: 1
  },
  container: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // paddingLeft: width / 40,
    // paddingRight: width / 40,
    // paddingTop: width / 40,
    backgroundColor: colors.whiteColor,
  },
  rightpanel: {
    paddingLeft: width/40,
    backgroundColor: colors.whiteColor
  },
  leftpanel: {
     //flex: 1,
     //flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    padding: width/10,
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
    padding: 10,
    paddingRight: 30,
  },
  itemDescriptionStyle: {
    color: "black",
    fontSize: 17,
    paddingLeft: 10
  }
};
