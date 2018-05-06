import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, Dimensions,TouchableOpacity} from 'react-native'
import config from "../../config"


class Post extends Component {
  constructor(){
    super();
    this.state = {
      liked: false,
      windowWidth : 0
    }
  }

  likeToogle(){
    this.setState({
      liked: !this.state.liked
    })
  }

  componentDidMount(){
    this.setState({
      windowWidth:Dimensions.get("window").width
    })
  }

  render(){
    const imgHeight = Math.floor(this.state.windowWidth*1.1) 
    const imgUri = `https://lh3.googleusercontent.com/VW_FTRHBu90_Sbfvs3T1lNi6mrYGafe1RfHNLyqile83zRUSAwZnFBWIIgHvCQHTvtkH9obHXZgJ2hx6qHwBTtFGow=s${imgHeight}-c`

    const likeIconColor = (this.state.liked) ? "rgb(252,61,57)" : null;
 

    return (
        <View>
        <View style={styles.userBar}>
          <View style={{flexDirection:"row",alignItems:"center"}}>
            <Image
              source={{uri:"https://lh3.googleusercontent.com/Q-UKk3LJoBPYWGk1wKvFg8N8E1QjEGENrCDtCsC-A7tSqxkN1GUw9M6XWVD2PX3Q5ZK2PL2vI1NBYVh4_MfKkQxviA"}}
              style={styles.userPic}
            />
            <Text style={{marginLeft:10}}>Nicolas</Text>
          </View>
          <View style={{alignItems:"center"}}>
            <Text style={{fontSize:30}}>...</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => this.likeToogle()} >
          <Image 
            source={{uri:imgUri}}
            style={{width:this.state.windowWidth , height:imgHeight}} 
          />
        </TouchableOpacity>
        <View style={styles.iconBar}>
          <Image style={[styles.icon,{height:40,width:40,tintColor:likeIconColor}]} source={config.images.likeIcon} />
          <Image style={[styles.icon ,{height:35,width:35}]} source={config.images.commentIcon} />
          <Image style={[styles.icon,{height:40,width:40}]} source={config.images.redirectIcon} />
        </View>
        <View style={styles.iconBar}>
          <Image style={[styles.icon, {height:30,width:30}]} source={config.images.likeBlackIcon} />
          <Text>128 likes</Text>
        </View>
      </View>
    ) 
  }
}

const styles = StyleSheet.create({
  tempNav:{
    width: 100+"%", 
    height:56,
    marginTop:20,
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(233,233,233)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent:"center",
    alignItems:"center",
  },
  userBar:{
    width:100+"%",
    height: config.stylesConstant.rowHeight,
    backgroundColor:"rgb(255,255,255)",
    flexDirection:"row",
    paddingHorizontal:10,
    justifyContent:"space-between"
  },
  iconBar:{
    height: config.stylesConstant.rowHeight,
    width:100+"%",
    borderColor:"rgb(233,233,233)",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems:"center"
  },
  userPic:{
    width:40,
    height:40,
    borderRadius:20,
  },
  icon:{
    marginLeft:5
  }
})

export default Post;