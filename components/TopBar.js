import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
import TextTicker from 'react-native-text-ticker'
import { ToggleIcon } from './'
import { checkSource } from './utils'

const backgroundColor = 'transparent'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 35,
    justifyContent: 'flex-start',
    marginRight: 5,
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    backgroundColor,
    fontSize: 16
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
    onMorePress
  } = props
  return (
    <LinearGradient colors={['rgba(0,0,0,0.75)', 'rgba(0,0,0,0)']} style={styles.container}>
      <View style={styles.row}>
        { logo && <Image style={[styles.logo, {borderRadius: 12}]} resizeMode="contain" {...checkSource(logo)} />}
        <TextTicker
          style={[styles.title, { color: theme.title }]}
          numberOfLines={1}
          repeatSpacer={25}
        >
          {title}
        </TextTicker>
          <ToggleIcon
            style={[styles.more, {flex: 1}]}
            onPress={() => onMorePress()}
            paddingRight
            iconOff="more-horiz"
            iconOn="more-horiz"
            theme={theme.more}
            size={25}
          />
      </View>
    </LinearGradient>
  )
}

TopBar.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  more: PropTypes.bool.isRequired,
  onMorePress: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired
}

export { TopBar }
