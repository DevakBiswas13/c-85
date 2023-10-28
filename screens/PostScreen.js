import { render } from "react-dom/cjs/react-dom.production.min";

renderItem = ({item:post}) =>{
    return <PostCard post={post} navigation={this.props.navigation}/>
}