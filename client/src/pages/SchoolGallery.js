import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GalleryImage from "../components/SchoolGalleryImage";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Tabs from "../components/Tabs";
import { getMyGallery } from "../redux/actions/galleryActions";
const Gallery = () => {
  const { images, loading } = useSelector((state) => state.myGallery);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyGallery());
    // eslint-disable-next-line
  }, []);
  return (
    <Wrapper>
      <ContentWrapper>
        <TabsWrapper>
          <Tabs />
        </TabsWrapper>
        <ImagesWrapper>
          <Navbar />
          <div className="container">
            <Title>Your Gallery</Title>
            <Link to="/create_gallery">
              <Button>Add Images</Button>
            </Link>
          </div>

          {loading ? (
            <Loader />
          ) : images?.length === 0 ? (
            <h1 style={{ marginTop: "40px" }}>
              You haven't added any images yet.
            </h1>
          ) : (
            <ImagesList>
              {images?.map((image) => (
                <GalleryImage key={image._id} {...image} />
              ))}
            </ImagesList>
          )}
        </ImagesWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  overflow-y: scroll;
  flex-direction: column;
  height: 100vh;
  overflow-x: hidden;
  width: 100%;
  align-items: flex-start;
`;
const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  position: relative;
`;
const Button = styled.button`
  width: 167px;
  height: 50px;

  background: #141414;

  border: transparent;
  border-radius: 10px;
  cursor: pointer;
  color: #ffffff;
  transition: all 0.5s linear;
  &:hover {
    border-radius: 26px;
    color: #e5e5e5;
  }
`;
const TabsWrapper = styled.div`
  width: 340px;
`;
const ImagesWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-left: 37px;
  padding-right: 88px;
  flex-direction: column;
  overflow-y: scroll;
  height: 100vh;
  .container {
    display: flex;
    margin-top: 15px;
    justify-content: space-between;
    align-items: center;
  }
`;
const ImagesList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  padding: 20px 0;
`;
const Title = styled.h1`
  display: flex;
  align-items: center;
  font-family: "Dm Sans";
  margin-top: 15px;

  font-weight: 700;
  font-size: 24px;
  line-height: 48px;
  color: #0d0d2b;
`;

export default Gallery;
