import React, { Fragment } from "react";
import { FlatList } from "react-native";
import DetailElement from "../components/DetailElement";
import DetailHeader from "../components/DetailHeader";
import { maskapai } from "../data/allData";

const Detail = ({ route }) => {
  const { keberangkatan, tujuan, tanggal } = route.params;

  const elementDetail = maskapai.map((item) => {
    <DetailElement
      key={item.maskapai_id}
      keberangkatan={keberangkatan}
      tujuan={tujuan}
      tanggal={tanggal}
      nama={item.maskapai_nama}
    />;
  });

  console.log(elementDetail);

  return (
    <Fragment>
      <DetailHeader tanggal={tanggal} />
      <FlatList
        data={maskapai}
        renderItem={({ item }) => (
          <DetailElement
            keberangkatan={keberangkatan}
            tujuan={tujuan}
            tanggal={tanggal}
            nama={item.maskapai_nama}
          />
        )}
        keyExtractor={(item) => item.maskapai_id}
      />
    </Fragment>
  );
};

export default Detail;
