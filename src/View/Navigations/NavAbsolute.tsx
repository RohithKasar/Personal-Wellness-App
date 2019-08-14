import { Entypo, Feather, MaterialIcons } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../../constants';

export interface IProps {
  navigation: any;
  title: string;
  subTitle?: string;
}

export interface IState {
  like: boolean;
}

export default class NavAbsolute extends React.Component<IProps, IState> {
  public state: Readonly<IState> = {
    like: false,
  };

  public render() {
    const { navigation, title, subTitle } = this.props;

    return (
      <View>
        <View style={styles.container}>
          <View style={styles.leftRow}>
            <MaterialIcons
              size={34}
              name="arrow-back"
              onPress={() => navigation.goBack(null)}
              color={Colors.white}
              iconStyle={styles.icon}
              underlayColor="transparent"
              underlineColorAndroid="transparent"
              containerStyle={styles.iconContainer}
              hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
            />
          </View>
          <View style={styles.centerRow}>
            <Text style={styles.titleText} numberOfLines={1}>
              {title}
            </Text>
            <Text style={styles.subTitleText} numberOfLines={1}>
              {subTitle}
            </Text>
          </View>
          <View style={styles.rightRow}>
            <Entypo
              size={40}
              name="heart-outlined"
              iconStyle={styles.icon}
              onPress={this.onPressLike}
              underlayColor="transparent"
              underlineColorAndroid="transparent"
              color={this.state.like ? Colors.pink : Colors.white}
              hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
              containerStyle={[styles.iconContainer, { marginRight: 12 }]}
            />
            <Feather
              size={32}
              name="share-2"
              color={Colors.white}
              onPress={() => null}
              iconStyle={styles.icon}
              underlayColor="transparent"
              underlineColorAndroid="transparent"
              containerStyle={styles.iconContainer}
              hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
            />
          </View>
        </View>
      </View>
    )
  }

  private onPressLike = () => {
    this.setState(state => ({
      like: !state.like,
    }));
  }
}

const styles = StyleSheet.create({
  centerRow: {
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  container: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
    elevation: 0,
    flexDirection: 'row',
    height: 55,
    justifyContent: 'center',
    left: 0,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 22,
    position: 'absolute',
    right: 0,
    zIndex: 100,
  },
  icon: {
    justifyContent: 'flex-start',
    marginTop: 2.8,
  },
  iconContainer: {
    alignSelf: 'center',
  },
  leftRow: {
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  rightRow: {
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 4,
  },
  titleText: {
    color: Colors.white,
    fontSize: 24,
    fontWeight: '600',
  },
  subTitleText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: '400',
  },
});
