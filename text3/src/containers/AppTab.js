import React from "react";
import { TabBar } from "antd-mobile";
import AppHome from "./AppHome";
import AppInspiration from "./AppInspiration";
import AppMall from "./AppMall";
import AppMine from "./AppMine";

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "blueTab"
    };
  }
  render(){
      return(
          <div style={{
            position: "fixed",
            height: "100%",
            width: "100%",
            top: 0
          }}
          id="tab-div">
              <TabBar
                unselectedTintColor="#686868"
                tintColor="#3fcccb"
                barTintColor="white"
              >
                  <TabBar.Item
                    title="首页"
                    key="tab1"
                    icon={{uri:require('../images/tab11.jpg')}}
                    selectedIcon={{uri: require('../images/tab1.jpg')}}
                    selected={this.state.selectedTab === "blueTab"}
                    onPress={()=>{
                        this.setState({
                            selectedTab:"blueTab"
                        });
                    }}
                  >
                      <AppHome/>
                  </TabBar.Item>
                  <TabBar.Item
                    title="灵感"
                    key="tab2"
                    icon={{uri:require('../images/tab22.jpg')}}
                    selectedIcon={{uri: require('../images/tab2.jpg')}}
                    selected={this.state.selectedTab === "redTab"}
                    onPress={()=>{
                        this.setState({
                            selectedTab:"redTab"
                        });
                    }}
                  >
                    <AppInspiration/>
                  </TabBar.Item>
                  <TabBar.Item
                    title="商城"
                    key="tab3"
                    icon={{uri:require('../images/tab33.jpg')}}
                    selectedIcon={{uri: require('../images/tab3.jpg')}}
                    selected={this.state.selectedTab === "greenTab"}
                    onPress={()=>{
                        this.setState({
                            selectedTab:"greenTab"
                        });
                    }}
                  >
                    <AppMall />
                  </TabBar.Item>
                  <TabBar.Item
                    title="我的"
                    key="tab4"
                    icon={{uri:require('../images/tab44.jpg')}}
                    selectedIcon={{uri: require('../images/tab4.jpg')}}
                    selected={this.state.selectedTab === "blackTab"}
                    onPress={()=>{
                        this.setState({
                            selectedTab:"blackTab"
                        });
                    }}
                  >
                    <AppMine />
                  </TabBar.Item>
              </TabBar>
          </div>
      )
  }
}