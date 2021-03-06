import createAnimationWrapper from '../createAnimationWrapper'

const zoomIn = {
  '0%': {
    opacity: '0',
    transform: 'scale3d(.3, .3, .3)',
  },
  '50%': { opacity: '1' },
}

export default createAnimationWrapper(zoomIn)
