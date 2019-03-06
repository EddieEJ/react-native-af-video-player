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
import Icon from 'react-native-vector-icons/FontAwesome'
import { ToggleIcon } from './'
import { checkSource } from './utils'

const backgroundColor = 'transparent'

const styles = StyleSheet.create({
  container: {
    height: 35,
    justifyContent: 'flex-start',
    paddingRight: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    backgroundColor,
    fontSize: 16,
    alignSelf: 'center'
  },
  logo: {
    flex: 1,
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
         <View style={{flex: 1}}>
           <Icon name="share" size={25} />
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
