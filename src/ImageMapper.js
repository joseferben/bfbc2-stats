export default class ImageMapper {

  static mapToFileName(label) {
    return label.toLowerCase().replace('#', ' ');
  }

}
