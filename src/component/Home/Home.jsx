import React, { useEffect } from "react";
import styled from "styled-components";
import ImageSlider from "../ImageSlider/ImageSlider";
import Viewers from "../Viewers/Viewers";
import Recommend from "../Recommend/Recommend";
import NewDisney from "../NewDisney/NewDisney";
import Originals from "../Origninals/Originals";
import Trending from "../Trending/Trending";

import { firestore } from "../../firebase";
import { doc, getDoc, collection, query, getDocs } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../Store/Features/movieSlice";

const Home = () => {
  const userData = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  let recommends = [];
  let newDisney = [];

  const getDocumentsAndCollections = async () => {
    const collectionRef = collection(firestore, "movies");
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);

    querySnapshot.docs.map((docSnapshot) => {
      switch (docSnapshot.data().type) {
        case "recommend":
          recommends = [
            ...recommends,
            { id: docSnapshot.id, ...docSnapshot.data() },
          ];
          break;

        case "new":
          newDisney = [
            ...newDisney,
            { id: docSnapshot.id, ...docSnapshot.data() },
          ];
          break;

        default:
          break;
      }
    });

    dispatch(
      setMovies({
        recommend: recommends,
        newDisney,
        original: null,
        trending: null,
      })
    );
  };

  useEffect(() => {
    getDocumentsAndCollections();
  }, [userData]);
  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Recommend />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  top: 72px;
  width: 100%;
  min-height: calc(100vh - 250px);
  padding: 0 40px;

  &:before {
    content: "";
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    position: absolute;
    inset: 0;
    z-index: -1;
  }
`;

export default Home;
