import React, { useState, useContext } from "react";
import { Alert, Dimensions } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Label,
  Input,
  Item,
  Form,
  Text,
} from "native-base";
import theme from "../resources/theme.json";
import translate from "../utils/language.utils";
import { Store } from "../Store";

const deviceWidth = Dimensions.get("window").width;
const contentWidth = deviceWidth - theme.content_margin;

export function NoteMainScreen({ navigation }) {
  const { state } = useContext(Store);
  return (
    <Container style={{ width: deviceWidth, alignItems: "center" }}>
      <Content style={{ width: contentWidth }}>
        <Button
          block
          style={{
            marginTop: 20,
            height: theme.btn_full_height,
            backgroundColor: theme.btn_bg_color,
          }}
        >
          <Text>{translate("browse_all_notes")}</Text>
        </Button>
        <Button
          block
          style={{
            marginTop: 20,
            height: theme.btn_full_height,
            backgroundColor: theme.btn_bg_color,
          }}
          onPress={() => {
            navigation.navigate("NewNote");
          }}
        >
          <Text>{translate("add_new_note")}</Text>
        </Button>
        <Button
          block
          style={{
            marginTop: 20,
            height: theme.btn_full_height,
            backgroundColor: theme.btn_bg_color,
          }}
        >
          <Text>{translate("search_note")}</Text>
        </Button>
        <Button
          block
          style={{
            marginTop: 20,
            height: theme.btn_full_height,
            backgroundColor: theme.btn_bg_color,
          }}
        >
          <Text>{translate("export_note")}</Text>
        </Button>
      </Content>
    </Container>
  );
}