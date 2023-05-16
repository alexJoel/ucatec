import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Platform,
    ActivityIndicator,
    TouchableOpacity,
    Linking
} from 'react-native';

class WeatherText extends Component {
    render() {
        const {
            name,
            error,
            loading,
            weatherCode,
            temperature,
            humidity,
            windSpeed,
            uvIndex,
            windDirection,
            lat,
            long
        } = this.props;
        const handlePress = (data) => {
            // Abre el enlace en el navegador por defecto del dispositivo
            console.log('data:--- ',data);
            //Linking.openURL(`https://maps.google.com/?q=${data.lat},${data.long}`);
            Linking.canOpenURL(`https://maps.google.com/?q=${data.lat},${data.long}`).then(supported => {
                if (supported) {
                  Linking.openURL(url);
                } else {
                  console.log('No se puede abrir la URL: ' + url);
                }
              });
          };
        return (
            <View>
                <View style={styles.spinner}>
                    <ActivityIndicator animating={loading} color="#000fff" size="large" />
                </View>

                {!loading && (
                    <View>
                        {error && (
                            <Text style={[styles.textStyle, styles.textErrorStyle]}>
                                No se pudo cargar el clima en este momento.
                            </Text>
                        )}
                        {!error && (
                            <View>
                                <Text style={styles.nameCity}>{name}, {weatherCode}</Text>
                                <Text
                                    style={[
                                        //styles.textTop,
                                        styles.textCityStyle,
                                        styles.textStyle
                                    ]}
                                >
                                    {'\n'}
                                    <Text style={styles.subTitle}>Dirección del viento: {windDirection}</Text>
                                    {'\n'}
                                    <Text style={styles.weatherCode}>Índice UV: {uvIndex}</Text>
                                </Text>
                                <Text style={[styles.textMiddle, styles.textStyle]}>
                                    {`${Math.round(temperature)}°`}
                                    {'\n'}
                                    <Text style={[styles.textStyle, styles.tempRange]}>
										{`Latitud: ${lat}`} {'\n'} {`Longitud: ${long}`}
									</Text>
                                    {/*{'\n'}<TouchableOpacity onPress={handlePress({lat, long})}>
                                        <Text>Ver Mapa</Text>
                                    </TouchableOpacity>*/}
                                </Text>
                                <Text style={[styles.textBottom, styles.textStyle]}>
                                    Porcentaje de humedad: {humidity}%
                                    {'\n'}
                                    Viento: {(windSpeed * 1.609344).toPrecision(2)} km/h
                                </Text>
                            </View>
                        )}
                    </View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    spinner: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    textStyle: {
        fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto'
    },
    textErrorStyle: {
        padding: 80,
        alignSelf: 'center',
        fontSize: 32,
        fontWeight: '200'
    },

    textTop: {
        //paddingTop: 10,
        textAlign: 'left',
        fontSize: 32
    },
    textCityStyle: {
        fontSize: 28,
        paddingLeft: 10,
        fontWeight: '300'
    },
    weather: {
        fontSize: 18
    },
    textMiddle: {
        //marginTop: 40,
        textAlign: 'center',
        fontSize: 64
    },
    tempRange: {
        fontSize: 16
    },
    textBottom: {
        marginTop: 40,
        textAlign: 'right',
        fontSize: 18,
        paddingRight: 10
    },
    nameCity: {
        textAlign: 'center',
        width: '100%',
        fontSize: 40,
        color: 'darkcyan'
    },
    subTitle: {
        fontSize: 18,
    }
});

export default WeatherText;
