import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'

import TextTicker from 'react-native-text-ticker'
import Icon from 'react-native-vector-icons/FontAwesome'
import { ToggleIcon } from './'
import { checkSource } from './utils'

const backgroundColor = 'transparent'

const styles = StyleSheet.create({
  container: {
    height: 35,
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: "center"
  },
  title: {
    backgroundColor,
    fontSize: 16,
    alignSelf: 'center'
  },
  logo: {
    marginLeft: 5,
    height: 25,
    width: 25
  }
})

const TopBar = (props) => {
  const {
    logo,
    more,
    title,
    theme,
    onSharePress,
    onMorePress
  } = props
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        { logo && <Image style={[styles.logo, {borderRadius: 12}]} resizeMode="contain" {...checkSource(logo)} />}
        <View style={{flex: 1, paddingLeft: 5}}>
        <TextTicker
          style={[styles.title, { color: theme.title }]}
          numberOfLines={1}
          repeatSpacer={25}
        >
          {title}
        </TextTicker>
        </View>
         <View style={{flexDirection: "row", paddingLeft: 5}}>
           <TouchableOpacity onPress={() => onSharePress()}>
              <Icon name="share" color="white" style={{paddingTop: 2, paddingRight: 12 }} size={18} />
           </TouchableOpacity>
          <ToggleIcon
            style={[styles.more, {flex: 1}]}
            onPress={() => onMorePress()}
            paddingRight
            iconOff="more-vert"
            iconOn="more-vert"
            theme={theme.more}
            size={25}
          />
        </View>
      </View>
    </View>
  )
}

TopBar.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  more: PropTypes.bool.isRequired,
  onSharePress: PropTypes.func.isRequired,
  onMorePress: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired
}

export { TopBar }
