import React, { Component } from 'react';
import { Image } from 'react-native';

export default class DefaultImage extends Component {
  state = { showDefault: true, error: false };

  render() {
    var image = this.state.showDefault ? this.props.defaultSource : ( this.state.error ? this.props.defaultSource : this.props.source );

    return (
      <Image style={this.props.style} 
             source={image} 
             onLoadEnd={() => this.setState({showDefault: false})} 
             onError={() => this.setState({error: true})}
             resizeMode={this.props.resizeMode}/>
    );
  }
}