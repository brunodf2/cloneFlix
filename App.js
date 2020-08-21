import React, { useState } from "react";
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
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function cloneFlix() {
  const [lista, setLista] = useState([
    {
      title: "O Justiceiro",
      text:
        "Após o assassinato de sua família, Frank Castle está traumatizado e sendo caçado. No submundo do crime, ele se tornará aquele conhecido como O Justiceiro",
      release: 2018,
      img:
        "https://sujeitoprogramador.com/wp-content/uploads/2020/05/background.jpg",
    },
    {
      title: "Bad Boys for life",
      text:
        "Terceiro episódio das histórias dos policiais Burnett (Martin Lawrence) e Lowrey (Will Smith), que devem encontrar e prender os mais perigosos traficantes de drogas da cidade.",
      release: 2020,
      img:
        "https://sujeitoprogramador.com/wp-content/uploads/2020/05/badboy.jpg",
    },
    {
      title: "Viúva Negra",
      text:
        "Em Viúva Negra, após seu nascimento, Natasha Romanoff (Scarlett Johansson) é dada à KGB, que a prepara para se tornar sua agente definitiva.",
      release: 2020,
      img:
        "https://sujeitoprogramador.com/wp-content/uploads/2020/05/blackwidow.jpg",
    },
    {
      title: "Top Gun: MAVERICK",
      text:
        "Em Top Gun: Maverick, depois de mais de 30 anos de serviço como um dos principais aviadores da Marinha, o piloto à moda antiga Maverick (Tom Cruise) enfrenta drones e prova que o fator humano ainda é fundamental no mundo contemporâneo das guerras tecnológicas.",
      release: 2020,
      img:
        "https://sujeitoprogramador.com/wp-content/uploads/2020/05/topgun.jpeg",
    },
    {
      title: "BloodShot",
      text:
        "Bloodshot é um ex-soldado com poderes especiais: o de regeneração e a capacidade de se metamorfosear. ",
      release: 2020,
      img:
        "https://sujeitoprogramador.com/wp-content/uploads/2020/05/blood.jpg",
    },
    {
      title: "Free Guy",
      text:
        "Um caixa de banco preso a uma entediante rotina tem sua vida virada de cabeça para baixo quando ele descobre que é personagem em um brutalmente realista vídeo game de mundo aberto.",
      release: 2020,
      img:
        "https://sujeitoprogramador.com/wp-content/uploads/2020/05/freeguy.jpg",
    },
  ]);
  const [background, setbackground] = useState(lista[0].img);

  return (
    <ScrollView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={{ flex: 1, height: screenHeight }}>
        <View style={{ ...StyleSheet.absoluteFill, backgroundColor: "#000" }}>
          <ImageBackground
            source={{ uri: background }}
            style={styles.imgBg}
            blurRadius={8}
          >
            <View style={styles.viewSearch}>
              <TextInput style={styles.input} placeholder="Procurando algo ?" />
              <TouchableOpacity>
                <Icon
                  name="search"
                  color="#000"
                  size={25}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.textTop}>Acabou de chegar</Text>

            <View style={styles.slideView}></View>
          </ImageBackground>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBg: {
    flex: 1,
    width: null,
    height: null,
    opacity: 1,
    justifyContent: "flex-start",
    backgroundColor: "#000",
  },
  viewSearch: {
    backgroundColor: "#fff",
    elevation: 10,
    padding: 5,
    borderRadius: 5,
    marginVertical: 10,
    width: "90%",
    height: 50,
    flexDirection: "row",
    marginTop: 50,
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  input: {
    width: "90%",
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
  textTop: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 10,
    marginVertical: 10,
  },
  slideView: {
    width: "100%",
    height: 350,
    justifyContent: "center",
    alignItems: "center",
  },
});
