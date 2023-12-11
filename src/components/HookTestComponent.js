import { useMemo } from "react"
import { View } from "react-native";
import { Typography } from "./Typography";

export const HookTestComponent = (props) => {
  const txt = useMemo(() => {
    return props.a + props.b;
  }, [props.a, props.b])

  return (
    <View>
      <Typography>
        결과값 : {txt}
      </Typography>
    </View>
  )
}