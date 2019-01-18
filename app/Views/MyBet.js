import React, { Component } from "react";
import {
    ScrollView,
    StyleSheet,
    FlatList,
    Text,
    Button,
    ImageBackground,
    View
} from 'react-native';

import {
  Container,
  Spinner,
  StyleProvider,
} from "native-base";

import material from "../native_theme/variables/material";
import getTheme from "../native_theme/components";
import strings from "../resources/strings";
import consts from "../const";
import colors from "../resources/colors";
import dimens from "../resources/dimens";
import styles from "../resources/styles";

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { navigateTo } from '../Redux/actions';

import * as Api from "../api";
import MyDrawListItem from "./MyDrawListItem";

export class MyBet extends Component {

  constructor(props) {
    super(props);
    this.state = {
      progressStatus : true,
      mybetresult: [],
    }

    _isMounted = false;
    this.getMyBetApi = this.getMyBetApi.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    let token = 'temp_token';
    this.getMyBetApi(token, 1, consts.BASE_PAGE_LIMIT);
  }

  async getMyBetApi(token, start, limit) {

    if (this._isMounted) {

      try {
        const response = await Api.getMypickList(token, start, limit);
        if(!response.flag) {
          const data = start === 1 ? response : this.state.mybetresult.concat(response);
          this.setState({
            mybetresult: data,
            progressStatus: false,
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

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({ item }) => (
    <MyDrawListItem
      id={item.id}
      drawdate={item.bet_date}
      drawtime={item.bet_draw}
      betamount={item.bet_amt}
      betnumber={item.bet_number}
      navigation={this.props.navigation}
    />
  );

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container
          shouldRasterizeIOS
          renderToHardwareTextureAndroid
          style={repositoriesListStyles.screenStyle}
        >
          
                <FlatList
                  data={this.state.mybetresult}
                  onEndReachedThreshold={0.01}
                  keyExtractor={this._keyExtractor}
                  renderItem={this._renderItem}
                  onEndReached={() => this.dispatchGetRepos()}
                  ItemSeparatorComponent={() => (
                    <View style={repositoriesListStyles.itemSeparatorStyle} />
                  )}
                />
                {this.renderProgress()}
        </Container>
        
      </StyleProvider>
      
    );
  }

  dispatchGetRepos() {
    let token = 'temp_token';
    this.getMyBetApi(
      token, 
      this.getNextListPage(),
      consts.BASE_PAGE_LIMIT
    );
  }

  getNextListPage() {
    return (
      Math.ceil(this.state.mybetresult.length / consts.BASE_PAGE_LIMIT) + 1
    );
  }

  renderProgress() {
    if (this.state.progressStatus) {
      return this.spinner();
    } else {
      return null;
    }
  }

  spinner() {
    return (
      <Spinner
        color={colors.accentColor}
        animating={true}
        size={"large"}
        style={styles.progressStyle}
      />
    );
  }

}

const repositoriesListStyles = {
  flatListStyle: {},
  screenStyle: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colors.primaryColor
  },
  itemSeparatorStyle: {
    flex: 1,
    height: 1,
    backgroundColor: "grey"
  },
  logOutTextStyle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginRight: 16
  },
  dialogDescriptionStyle: {
    flexGrow: 1,
    fontSize: 16
  },
  dialogButtonContainer: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignSelf: "flex-end"
  },
  dialogButtonTextStyle: {
    color: colors.accentColor,
    fontSize: 20
  },
  dialogContainerStyle: {
    flexGrow: 1,
    alignItems: "center"
  },
  dialogTitleTextStyle: {
    fontSize: 20,
    color: "black"
  },

  container: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: '#ECEFF1',
  },
  view: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 40,
      padding: 20,
  },
  header1: {
      fontSize: 28,
      marginBottom: '30%',
  },
  text: {
      fontSize: 20,
      width: '70%',
      textAlign: 'center',
      lineHeight: 30,
      marginBottom: '10%',
  },
};

MyBet.propTypes = {
  activeRoute: PropTypes.shape({
    name: PropTypes.string.isRequired,
    screen: PropTypes.any.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
  navigateTo: PropTypes.func.isRequired,
};


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
)(MyBet);

