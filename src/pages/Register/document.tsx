import { Document, Page, View, Image, Text, StyleSheet } from "@react-pdf/renderer";
import { FC } from "react";
import { IRegisterForm } from ".";

export const RegisterInfoDocument: FC<IRegisterForm> = ({ email, password, pictures }) => {
    const styles = StyleSheet.create({
        page: {
            flexDirection: "row",
            backgroundColor: "#E4E4E4",
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1,
        },
    });

    return (
        <Document>
            <Page size="A4" style={styles.page} wrap>
                <View style={styles.section}>
                    <Text>Section #1</Text>
                </View>
                <View style={styles.section}>
                    <Text>{email}</Text>
                </View>
                <View style={styles.section}>
                    <Text>{password}</Text>
                </View>
                <View style={styles.section}>{pictures && <Image source={pictures[0]} />}</View>
            </Page>
        </Document>
    );
};
