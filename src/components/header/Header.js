import React from "react";
import { View, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Spacer } from "../Spacer";
import { HeaderTitle } from './HeaderTitle';
import { HeaderIcon } from "./HeaderIcon";
import { HeaderGroup } from './HeaderGroup';

// const { width } = Dimensions.get('window');

// export class Header extends React.Component {
//   render() {
//     return (
//       <SafeAreaInsetsContext.Consumer>
//         {insets => (
//           <View style={{paddingTop:insets.top, backgroundColor:'white'}}>
//             <View 
//               style={{ 
//                 width: width, 
//                 height:56, 
//                 flexDirection:'row', 
//                 borderBottomColor: 'gray', 
//                 borderBottomWidth: 1,
//                 alignItems:'center'
//               }}
//             >
//               <Spacer horizontal={true} space={12}/>
//               <View style={{ flex:1, flexDirection:'row', justifyContent:'space-between'}}>
//                 {this.props.children}
//               </View>
//               <Spacer horizontal={true} space={12}/>
//             </View>
//           </View>
//         )}
//       </SafeAreaInsetsContext.Consumer>
//     )
//   }
// }

export const Header = ({children}) => {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  return (
    <View style={{ paddingTop: insets.top}}>
      <View 
        style={{ 
          width: width, 
          height:56, 
          flexDirection:'row', 
          borderBottomColor: 'gray', 
          borderBottomWidth: 1,
          alignItems:'center'
        }}
      >
        <Spacer horizontal={true} space={12}/>
        <View style={{ flex:1, flexDirection:'row', justifyContent:'space-between'}}>
          {children}
        </View>
        <Spacer horizontal={true} space={12}/>
      </View>
    </View>
  )
}

Header.Title = HeaderTitle;
Header.Icon = HeaderIcon;
Header.Group = HeaderGroup;
