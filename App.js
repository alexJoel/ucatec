import React from 'react';
import {
	StyleSheet,
	KeyboardAvoidingView,
	View,
	ImageBackground,
	StatusBar
} from 'react-native';

import getImageForWeather from './src/utils/getImagesForWeather';
import { fetchLocationId, fetchWeather } from './src/utils/api';

import SearchInput from './src/components/SearchInput';
import WeatherText from './src/components/WeatherText';

export default class App extends React.Component {
	state = {
		loading: false,
		error: false,
		name: '',
		temperature: 0,
		humidity: 0,
		weatherCode: 0,
		windSpeed: 0
	};

	componentDidMount() {
		this.handleUpdateLocation('toronto');
	}

	handleUpdateLocation = async city => {
		if (!city) return;
        console.log(city);
		this.setState({ loading: true }, async () => {
			try {
				
                const dataGet =  await fetchLocationId(city);
                console.log('dataGet: ',dataGet);
				this.setState({
					loading: false,
					error: false,
					name: dataGet.location.name,
					weatherCode: dataGet.data.values?.weatherCode | 1001,
					temperature: dataGet.data.values?.temperature,
					humidity: dataGet.data.values?.humidity,
					windSpeed: dataGet.data.values?.windSpeed
				});
			} catch (e) {
                console.log(e);
				this.setState({
					loading: false,
					error: true
				});
			}
		});
	};

	render() {
		const {
			name,
			error,
			loading,
			weatherCode,
			temperature,
			humidity,
			windSpeed
		} = this.state;
        console.log('this.state: ',this.state);
		return (
			<KeyboardAvoidingView style={styles.container} behavior="padding">
				<StatusBar barStyle="light-content" />
				<ImageBackground
					source={getImageForWeather(weatherCode)}
					style={styles.imageContainer}
					imageStyle={styles.image}
				>
					<SearchInput
						placeholder="Select a City"
						onSubmit={this.handleUpdateLocation}
					/>
					<View style={styles.cards}>
						<View backgroundColor="#ffffff">
							<WeatherText
								location={name}
								loading={loading}
								weather={weatherCode}
								temperature={temperature}
								humidity={humidity}
								error={error}
								windSpeed={windSpeed}
							/>
						</View>
					</View>
				</ImageBackground>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	imageContainer: {
		flex: 1
	},
	image: {
		flex: 1,
		width: null,
		height: null,
		resizeMode: 'cover'
	},
	cards: {
		flex: 2
	}
});
