import { Text } from "react-native";
import PropTypes from "prop-types";

export default function Saludo(props) {
    console.log('props: ',props);
    const { name, lastName } = props
    return <Text>Welcome {name} {lastName}</Text>
}

Saludo.defaultProps = {
    name: "AlexDefault",
    lastName: "SajamaDefault"
}

Saludo.propTypes = {
    name: PropTypes.string.isRequired,
    // name: PropTypes.string.pattern(),
    lastName: PropTypes.string.isRequired
}