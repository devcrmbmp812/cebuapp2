import React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert
} from 'react-native';
import { Button, View, Spinner,Container } from "native-base";
import { connect } from 'react-redux';
import { navigateTo } from '../Redux/actions';

import AnimateNumber from 'react-native-animate-number';
import * as Api from "../api";

import dimens from "../resources/dimens";
import colors from "../resources/colors";
import consts from "../const";
import strings from "../resources/strings";

import coinImage from "../img/coin.jpg";
import dollarImage from "../img/dollar.png";

const { height, width } = Dimensions.get("window");


export class Drawing extends React.PureComponent {

  constructor(props) {
    super(props);

    _isMounted = false;

    this.state = {
      selected: 0,
      firstValue:0,
      secondValue:0,
      thirdValue:0,
      bet_amount: '1',
      total_amount: '100',
      value: 9,
      countBy: 1,
      stopflag: false,
      submitStatus: false,
    };

    this.submitQuickPickApi = this.submitQuickPickApi.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
  }

  async submitQuickPickApi(token, bet_number, bet_type, bet_amount) {

    if (this._isMounted) {
      try {
        const quickpickresult = await Api.submitQuickPick(token, bet_number, bet_type, bet_amount);
        if (quickpickresult.success) {
          
          this.setState({
            submitStatus: true,
          });
        } else {
          this.setState({
            submitStatus: false,
          });
        }
      } catch(err) {
        console.warn('err', err);
      }
    }

    
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidUpdate() {
    this.proceed();
  }

  proceed() {
    let status = this.state.submitStatus;
    if(status) {
      
      Alert.alert(
        'Save status!',
        `Save Successfully`,
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => {}},
        ],
        { cancelable: false }
      );
      this.moveMyBet();
    } 
  }

  moveMyBet = () => {
    this.setState({
      submitStatus:false,
    });
    this.props.navigateTo('MyBet');
  }

  selectFirst = () => {
    this.setState({ selected: 0 });
  };
  selectSecond = () => {
    this.setState({ selected: 1 });
  };
  onStartPress = () => {
    this.setState({
      stopflag: true,
      thirdValue: 9,
      secondValue: 9,
      firstValue: 9,
    })
  };

  animatefinish = () => {
    if(this.state.stopflag) {
      if(this.state.thirdValue == 9) {
        this.setState({
          thirdValue: 0,
          secondValue: 0,
          firstValue: 0,
        })
      } else if (this.state.thirdValue == 0) {
        this.setState({
          thirdValue: 9,
          secondValue: 9,
          firstValue: 9,
        })
      }
    } 
  };
  onStopPress = () => {
    let min=0; 
    let max=9;  
    let random1 = Math.random() * (+max - +min) + +min; 
    let random2 = Math.random() * (+max - +min) + +min; 
    let random3 = Math.random() * (+max - +min) + +min; 
    this.setState({
      stopflag: false,
      thirdValue: random1,
      secondValue: random2,
      firstValue: random3,
    })
  };
  onSubmitPress = () => {
    // this.popupDialog.show();
    const statusStr = this.state.selected ? 'Rambolito' : 'Straight';
    Alert.alert(
      'Confirm Bet ?',
      `${statusStr}, Number: ${this.state.firstValue} ${this.state.secondValue} ${this.state.thirdValue}, Amount: ${this.state.bet_amount}`,
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => this.submit()},
      ],
      { cancelable: false }
    )
  }

  onClearAll = () => {
    this.setState({ 
      bet_amount: 1, 
      firstValue: 0, 
      secondValue: 0,
      thirdValue: 0,
      selected: 0,
    });
  }

  submit = () => {
    let token = 'temp_token';
    this.submitQuickPickApi(
      token,
      "" + this.state.firstValue + this.state.secondValue + this.state.thirdValue + "",
      this.state.selected,
      this.state.bet_amount
    );
  }

  render() {
    return (
      // <ScrollView contentContainerStyle={styles.view}>
      //   <Text style={styles.header1}>{this.props.activeRoute.name}</Text>
      //   <Text style={styles.header1}>{this.props.login}</Text>
      //   <Text style={styles.text}>Welcome! Here you can book your next trip!!</Text>
      // </ScrollView>
      <View style={itemStyles.itemStyle}>
          
          <View style={itemStyles.betAmountStyle}>
            <Image
              style={{width: 40, height: 40}}
              source={coinImage}
            />
            <Text>Total Credit</Text>
            <TextInput
              label='Bet Amount'
              value={this.state.total_amount}
              onChangeText={total_amount => this.setState({ total_amount })}
            />

            <Image
              style={{width: 40, height: 40}}
              source={dollarImage}
            />
            <Text>Bet Amount</Text>
            <TextInput
              label='Bet Amount'
              value={this.state.bet_amount.toString()}
              onChangeText={bet_amount => this.setState({ bet_amount })}
            />
          </View>
          
          <View style={{ alignItems: "center" }}>
            <Text style={itemStyles.generatorStyle}>Generator</Text>
          </View>
          <View style={itemStyles.flexRowStyle}>
            <TouchableOpacity onPress={this.selectFirst}>
              <View style={itemStyles.viewStyle}>
                <View style={itemStyles.outerCircleStyle}>
                  <View
                    style={{
                      height: 10,
                      width: 10,
                      borderRadius: 5,
                      backgroundColor:
                        this.state.selected == 0 ? "black" : "white"
                    }}
                  />
                </View>
                <Text style={itemStyles.radioTextStyle}>Straight</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.selectSecond}>
              <View style={itemStyles.viewStyle}>
                <View style={itemStyles.outerCircleStyle}>
                  <View
                    style={{
                      height: 10,
                      width: 10,
                      borderRadius: 5,
                      backgroundColor:
                        this.state.selected == 0 ? "white" : "black"
                    }}
                  />
                </View>
                <Text style={itemStyles.radioTextStyle}>Rambolito</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* <View style={{ flexDirection: "row", paddingLeft: width / 6 }}>
            <Button
              style={itemStyles.buttonStartStyle}
              onPress={this.onStartPress}
            >
              <Text style={itemStyles.buttonTextStyle}>{strings.start}</Text>
            </Button>
            <Button style={itemStyles.buttonStopStyle} onPress={this.onStopPress}>
              <Text style={itemStyles.buttonTextStyle}>{strings.stop}</Text>
            </Button>
          </View> */}
          <View style={itemStyles.container}>
            <View style={itemStyles.circleimage}>
              <TextInput style={itemStyles.numberText} selectTextOnFocus keyboardType="numeric" maxLength={1} onChangeText={(text)=>{this.setState({firstValue:text})}}>
                {this.animateFirst()}
              </TextInput>
            </View>
            <View style={itemStyles.circleimage}>
              <TextInput style={itemStyles.numberText} selectTextOnFocus keyboardType="numeric" maxLength={1} onChangeText={(text)=>{this.setState({secondValue:text})}}>
                {this.animateSecond()}
              </TextInput>
            </View>
            <View style={itemStyles.circleimage}>
              <TextInput style={itemStyles.numberText} selectTextOnFocus keyboardType="numeric" maxLength={1} onChangeText={(text)=>{this.setState({thirdValue:text})}}>
                {this.animateThird()}
              </TextInput>
            </View>
          </View>
          
          
          <Button style={itemStyles.buttonSubmitStyle} onPress={this.onSubmitPress}>
            <Text style={itemStyles.buttonBoldStyle}>{strings.submit}</Text>
          </Button>
          <Button style={itemStyles.buttonSubmitStyle} onPress={this.onClearAll}>
            <Text style={itemStyles.buttonBoldStyle}>{strings.clearall}</Text>
          </Button>
          
        </View>
    );
  }

  animateFirst() {
    if(this.state.stopflag) {
      return this.animationFirst();
    } else {
      return this.state.firstValue;
    }
  };
  
  animationFirst() {
    const {firstValue, countBy} = this.state;
    return (
      <AnimateNumber 
        value={firstValue}
        countBy={countBy}
        timing="linear"
        onFinish={this.animatefinish}
      />
    );
  }
  
  animateSecond() {
    if(this.state.stopflag) {
      return this.animationSecond();
    } else {
      return this.state.secondValue;
    }
  }
  
  animationSecond() {
    const {secondValue, countBy} = this.state;
    return (
      <AnimateNumber 
        value={secondValue}
        countBy={countBy}
        timing="linear"
        onFinish={this.animatefinish}
      />
    );
  }
  
  animateThird() {
    if(this.state.stopflag) {
      return this.animationThird();
    } else {
      return this.state.thirdValue;
    }
  }
  
  animationThird() {
    const {thirdValue, countBy} = this.state;
    return (
      <AnimateNumber 
        value={thirdValue}
        countBy={countBy}
        timing="linear"
        onFinish={this.animatefinish}
      />
    );
  }
}



const itemStyles = {
  radioTextStyle: { paddingLeft: width / 40, fontSize: 16 },
  outerCircleStyle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: "#ff00ff",
    justifyContent: "center",
    alignItems: "center"
  },
  flexRowStyle: { flexDirection: "row" },
  generatorStyle: {
    fontStyle: "italic",
    color: "grey",
    fontSize: 48,
    fontWeight: "bold"
  },
  viewStyle: { flexDirection: "row", paddingLeft: width / 5 },
  buttonBoldStyle: {
    color: "black",
    fontSize: dimens.buttontexxt_size
  },
  buttonTextStyle: {
    color: "white",
    fontSize: dimens.buttontexxt_size
  },
  buttonStartStyle: {
    marginTop: dimens.margin_medium,
    marginHorizontal: dimens.margin_large,
    borderRadius: 20,
    alignSelf: "stretch",
    justifyContent: "center",
    backgroundColor: colors.circleColor
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
  buttonStopStyle: {
    marginTop: dimens.margin_medium,
    marginHorizontal: dimens.margin_large,
    borderRadius: 20,
    alignSelf: "stretch",
    justifyContent: "center",
    backgroundColor: "blue"
  },
  numberText: {
    color: "white",
    fontSize: 28
  },
  betAmountStyle: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: width / 20,
    paddingRight: width / 20,
    height: 50,
    marginTop: height / 25,
    // paddingTop: width / 40,
    backgroundColor: colors.whiteColor,
  },
  container: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: width / 10,
    paddingRight: width / 10,
    height: 100,
    // paddingTop: width / 40,
    //backgroundColor: "#ecf0f1"
  },
  circleimage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: colors.circleColor,
    justifyContent: "center",
    alignItems: "center"
  },
  itemStyle: {
    flex: 1,
    backgroundColor: "white"
  },
  itemTitleStyle: {
    color: "black",
    fontSize: 20,
    padding: 10
  },
  itemDescriptionStyle: {
    color: "darkgrey",
    fontSize: 17,
    paddingLeft: 10
  }
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    padding: 20,
  },
  header1: {
    fontSize: 24,
    marginBottom: '20%',
  },
  text: {
    fontSize: 20,
    width: '70%',
    textAlign: 'center',
    lineHeight: 30,
    marginBottom: '20%',
  },
});

const mapStateToProps = state => ({
  activeRoute: state.routes.activeRoute,
  login: state.routes.login,
});

const mapDispatchToProps = dispatch => ({
  navigateTo: routeName => { dispatch(navigateTo(routeName)); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Drawing);
