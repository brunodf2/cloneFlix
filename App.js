import React, { useState, useRef } from 'react';
import {
	View,
	Text,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	StatusBar,
	Dimensions,
	ImageBackground,
	TextInput,
	TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Carousel from 'react-native-snap-carousel';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function cloneFlix() {
	const carouselRef = useRef(null);

	const [ lista, setLista ] = useState([
		{
			title: 'O Justiceiro',
			text:
				'Após o assassinato de sua família, Frank Castle está traumatizado e sendo caçado. No submundo do crime, ele se tornará aquele conhecido como O Justiceiro',
			release: 2018,
			img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/background.jpg'
		},
		{
			title: 'Bad Boys for life',
			text:
				'Terceiro episódio das histórias dos policiais Burnett (Martin Lawrence) e Lowrey (Will Smith), que devem encontrar e prender os mais perigosos traficantes de drogas da cidade.',
			release: 2020,
			img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/badboy.jpg'
		},
		{
			title: 'Viúva Negra',
			text:
				'Em Viúva Negra, após seu nascimento, Natasha Romanoff (Scarlett Johansson) é dada à KGB, que a prepara para se tornar sua agente definitiva.',
			release: 2020,
			img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/blackwidow.jpg'
		},
		{
			title: 'Top Gun: MAVERICK',
			text:
				'Em Top Gun: Maverick, depois de mais de 30 anos de serviço como um dos principais aviadores da Marinha, o piloto à moda antiga Maverick (Tom Cruise) enfrenta drones e prova que o fator humano ainda é fundamental no mundo contemporâneo das guerras tecnológicas.',
			release: 2020,
			img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/topgun.jpeg'
		},
		{
			title: 'BloodShot',
			text:
				'Bloodshot é um ex-soldado com poderes especiais: o de regeneração e a capacidade de se metamorfosear. ',
			release: 2020,
			img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/blood.jpg'
		},
		{
			title: 'Free Guy',
			text:
				'Um caixa de banco preso a uma entediante rotina tem sua vida virada de cabeça para baixo quando ele descobre que é personagem em um brutalmente realista vídeo game de mundo aberto.',
			release: 2020,
			img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/freeguy.jpg'
		}
	]);
	const [ background, setbackground ] = useState(lista[0].img);
	const [ activeIndex, setActiveIndex ] = useState(0);

	const _renderItem = ({ item, index }) => {
		return (
			<View>
				<TouchableOpacity>
					<Image source={{ uri: item.img }} style={styles.carouselImg} />
					<Text style={styles.carouselText}>{item.title}</Text>
					<Icon name="play-circle-outline" size={35} color="#fff" style={styles.carouselIcon} />
				</TouchableOpacity>
			</View>
		);
  };
  

	return (
		<ScrollView style={styles.container}>
			<StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
			<View style={{ flex: 1, height: screenHeight }}>
				<View style={{ ...StyleSheet.absoluteFill, backgroundColor: '#000' }}>
					<ImageBackground source={{ uri: background }} style={styles.imgBg} blurRadius={8}>
						<View style={styles.viewSearch}>
							<TextInput style={styles.input} placeholder="Procurando algo ?" />
							<TouchableOpacity>
								<Icon name="search" color="#000" size={25} style={styles.icon} />
							</TouchableOpacity>
						</View>

						<Text style={styles.textTop}>Acabou de chegar</Text>

						<View style={styles.slideView}>
							<Carousel
								style={styles.carousel}
								ref={carouselRef}
								data={lista}
								renderItem={_renderItem}
								sliderWidth={screenWidth}
								itemWidth={200}
								inactiveSlideOpacity={0.5}
								onSnapToItem={(index) => {
									setbackground(lista[index].img);
									setActiveIndex(index);
								}}
							/>
						</View>

						<View style={styles.moreInfo}>
							<View style={{ marginTop: 10 }}>
								<Text style={styles.movieTitle}>{lista[activeIndex].title}</Text>
								<Text style={styles.movieDesc}>{lista[activeIndex].text}</Text>
							</View>
							<TouchableOpacity onPress={() => Alert.alert(`${lista[activeIndex].title}`, `${lista[activeIndex].text}`)}>
								<Icon name="queue" size={30} color="#131313" style={styles.movieIcon} />
							</TouchableOpacity>
						</View>
					</ImageBackground>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	imgBg: {
		flex: 1,
		width: null,
		height: null,
		opacity: 1,
		justifyContent: 'flex-start',
		backgroundColor: '#000'
	},
	viewSearch: {
		backgroundColor: '#fff',
		elevation: 10,
		padding: 5,
		borderRadius: 5,
		marginVertical: 10,
		width: '90%',
		height: 50,
		flexDirection: 'row',
		marginTop: 50,
		alignItems: 'center',
		justifyContent: 'space-between',
		alignSelf: 'center'
	},
	input: {
		width: '90%',
		fontSize: 16
	},
	icon: {
		marginRight: 5
	},
	textTop: {
		fontSize: 25,
		fontWeight: 'bold',
		color: '#fff',
		marginLeft: 10,
		marginVertical: 10
	},
	slideView: {
		width: '100%',
		height: 350,
		justifyContent: 'center',
		alignItems: 'center'
	},
	carousel: {
		flex: 1,
		overflow: 'visible'
	},
	carouselImg: {
		alignSelf: 'center',
		width: 200,
		height: 300,
		borderRadius: 12,
		backgroundColor: 'rgba(0,0,0,0.5)'
	},
	carouselText: {
		padding: 15,
		color: '#fff',
		position: 'absolute',
		bottom: 10,
		left: 2,
		fontWeight: 'bold'
	},
	carouselIcon: {
		position: 'absolute',
		top: 15,
		right: 5
	},
	moreInfo: {
		backgroundColor: '#fff',
		width: screenWidth,
		height: screenHeight,
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 18
	},
	movieTitle: {
		fontSize: 22,
		fontWeight: 'bold',
		color: '#131313',
		marginBottom: 10
	},
	movieDesc: {
		color: '#131313',
		fontSize: 14,
		fontWeight: 'bold',
		lineHeight: 19
	},
	movieIcon: {
		marginRight: 8,
		marginTop: 10
	}
});
