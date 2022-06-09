# react-native-default-image
Image component that allow to set up a default image to be shown when the custom image is loading and if the custom image can't be loaded.

## Version 1.0.0

## Installation
```
$ npm install react-native-default-image --save
```

## Demo
| Loading | Loaded  |
| ------- | ------- |
| <img src="https://user-images.githubusercontent.com/99638905/172736525-1fc3a9cf-92ac-40b8-9b3a-980fa1cfd6c8.jpg" width="300"  /> | <img src="https://user-images.githubusercontent.com/99638905/172736689-62bf15d9-5b75-47de-97a5-476a00d5a55b.jpg" width="300"  /> |

## Basic Usage

```javascript
import { DefaultImage } from 'react-native-default-image';

const App () => {
    return (
        <DefaultImage 
            style={{width: 40,height: 40,borderRadius:20,backgroundColor: '#0B0D0F'}} 
            defaultSource={require('./assets/defaultImage.png')} 
            source={{uri: `https://i.imgur.com/nRC8ZL5.png`}} 
            resizeMode='contain'
        />
    )
}
```

## Properties

| Prop          | Description         | Type          | Default  | Required |
| ------------- | ------------------  |:-------------:| -----:   | -------- |
| `source`      | Custom image source | `ImageSource` (`uri` and local file) | `none`    | Yes      |
| `defaultSource`      | Default image source (to be shown when the custom image is loading and if the custom image failed) | `ImageSource` (`uri` and local file) | `none`    | Yes      |          |
| `resizeMode`    | Determines how to resize the image when the frame doesn't match the raw image dimensions | enum('`cover`', '`contain`', '`stretch`', '`repeat`', '`center`') | `cover` | No         |
| `style`    | Image style | Image Style Props | `none` | Yes (width and height)         |