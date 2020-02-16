import { clamp } from 'lodash'
import { Dimensions, ScaledSize } from 'react-native'

type ScreenDimensions = Pick<ScaledSize, 'height' | 'width'> | ScaledSize

/* screenDimensions calculated based on size of window */
export const screenDimensions = Dimensions.get('window')

/* base dimensions based on iPhone SE */
const baseDimensions: ScreenDimensions = {
  height: 568,
  width: 320,
}

interface NormalizeOptions {
  min?: number
  max?: number
  screenDimensions: ScreenDimensions
}

const roundedClamp = (num: number, min: number, max: number) =>
  Math.round(clamp(num, min, max))

const calculateHypotenuse = ({ width, height }: ScreenDimensions) =>
  Math.sqrt(width ** 2 + height ** 2)

const scaleDimension = (
  dimension: number,
  dimensionName: 'height' | 'width',
  options: NormalizeOptions,
) => {
  return roundedClamp(
    options.screenDimensions[dimensionName] *
      (dimension / baseDimensions[dimensionName]),
    options.min || 0,
    options.max || options.screenDimensions[dimensionName],
  )
}

export const normalizedHeight = (
  height: number,
  options: Partial<NormalizeOptions> = {},
) =>
  scaleDimension(height, 'height', {
    screenDimensions,
    ...options,
  })

export const normalizedWidth = (
  width: number,
  options: Partial<NormalizeOptions> = { screenDimensions },
) =>
  scaleDimension(width, 'width', {
    screenDimensions,
    ...options,
  })

/* scale fontsize by comparing the window's actual hypotenuse to our base hypotenuse */
export const normalizedFontSize = (
  fontSize: number,
  options: Partial<NormalizeOptions> = {},
) => {
  const config = {
    screenDimensions,
    ...options,
  }

  return Math.round(
    calculateHypotenuse(config.screenDimensions) *
      (fontSize / calculateHypotenuse(baseDimensions)),
  )
}
