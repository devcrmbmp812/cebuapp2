import React, { Component } from "react";
import {
    ScrollView,
    StyleSheet,
    FlatList,
    Text,
    Button,
    ImageBackground,
} from 'react-native';

import {
  Container,
  Spinner,
  StyleProvider,
  Tabs,
  Tab
} from "native-base";

import material from "../native_theme/variables/material";
import getTheme from "../native_theme/components";
import strings from "../resources/strings";
import consts from "../const";
import colors from "../resources/colors";
import dimens from "../resources/dimens";

import * as Api from "../api";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { navigateTo } from '../Redux/actions';
const backgroundImage = require('../img/bg_travel.jpeg');



export class Travel extends Component {

  constructor(props) {
    super(props);
    this.getDrawResultApi = this.getDrawResultApi.bind(this);
  }

  componentDidMount() {
    this.getDrawResultApi();
  }

  async getDrawResultApi() {
    const response = await Api.getDrawresults();
    console.warn('response', response);
    this.setState({

    })
  }

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container
          shouldRasterizeIOS
          renderToHardwareTextureAndroid
          style={repositoriesListStyles.screenStyle}
        >
          
          <ImageBackground
            source={backgroundImage}
            style={styles.container}
            imageStyle={{ opacity: 0.3 }}
          >
            <ScrollView contentContainerStyle={styles.view}>
                <FlatList
                  data={[{key: 'a'}, {key: 'b'}]}
                  renderItem={({item}) => <Text>{item.key}</Text>}
                />
                <Text style={styles.header1}>{this.props.activeRoute.name}</Text>
                <Text style={styles.header1}>{this.props.login}</Text>
                <Text style={styles.text}>
                    Book your next trip by clicking the button below.
                </Text>
                <Button
                  title="Book your trip"
                  style={styles.button}
                  onPress={() => { this.props.navigateTo('Drawing'); }}
                />
            </ScrollView>
          </ImageBackground>
        </Container>
        
      </StyleProvider>
      
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
  }
};

Travel.propTypes = {
  activeRoute: PropTypes.shape({
    name: PropTypes.string.isRequired,
    screen: PropTypes.any.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
  navigateTo: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
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
)(Travel);

