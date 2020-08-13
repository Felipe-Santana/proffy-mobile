import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unFavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              "https://m.media-amazon.com/images/M/MV5BMTQ5ODI0MDc4M15BMl5BanBnXkFtZTgwNTM5MDk3MTE@._V1_UX214_CR0,0,214,317_AL_.jpg",
          }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Liam Hemsworth</Text>
          <Text style={styles.subject}>Transfiguração</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Was an English half-blood wizard serving as Potions Master, Defence
        Against the Dark Arts professor, and Headmaster of the Hogwarts School
        of Witchcraft and Wizardry as well as a member of the Order of the
        Phoenix and a Death Eater.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/Hora {"  "}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorite]}>
            <Image source={unFavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
