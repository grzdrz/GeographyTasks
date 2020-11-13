import Vector from '../../assets/vector';

interface IDrawableImage {
  image: HTMLImageElement,
  isImageLoaded: boolean,
  position: Vector,
  size: Vector,
  angle: number,
}

export default IDrawableImage;
