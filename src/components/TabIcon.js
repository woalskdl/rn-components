import React from "react";
import { View } from "react-native";
import { Badge } from "./Badge";
import { Icon } from "./Icons";

// export class TabIcon extends React.Component {
  
//   render() {

//     if(this.props.visibleBadge) {
//       return (
//         <View>
//           <Badge fontSize={10}>
//             <Icon 
//               name={this.props.iconName} 
//               size={20} 
//               color={'black'}
//             />
//           </Badge>
//         </View>
//       )
//     }
    
//     return (
//       <View>
//         <Icon 
//           name={this.props.iconName} 
//           size={20} 
//           color={'black'}
//         />
//       </View>
//     )

//   }
// }

export const TabIcon = ({visibleBadge, iconName}) => {
  if (visibleBadge) {
    return (
      <Badge fontSize={10}>
        <Icon 
          name={iconName} 
          size={20} 
          color={'black'}
        />
      </Badge>
    )
  }

  return (
    <Icon 
      name={iconName} 
      size={20} 
      color={'black'}
    />
  )
}