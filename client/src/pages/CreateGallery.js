import React, { useEffect, useState } from "react";
import { HiPhotograph } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/FullNavbar";
import InputWithLabel from "../components/InputWithLabel";
import { useIsMount } from "../hooks/useIsMount";
import { addToGallery } from "../redux/actions/galleryActions";

const CreateGallery = () => {
  const [image, setImage] = useState();
  const [caption, setCaption] = useState();
  const [count, setCount] = useState(0);
  const [images, setImages] = useState([]);

  const { loading, gallery, error } = useSelector((state) => state.addGallery);
  const isMount = useIsMount();
  useEffect(() => {
    if (!isMount) {
      alert(error);
    }
    // eslint-disable-next-line
  }, [error]);
  useEffect(() => {
    if (!isMount) {
      alert("Images added to your gallery");
      setImage(null);
      setImages([]);
      setCaption("");
      setCount(0);
    }
    // eslint-disable-next-line
  }, [gallery]);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (!caption || (images.length === 0 && !image)) {
      alert("Kindly fill all the fields!");
    } else {
      if (image && images.length === 0) {
        setImages((current) => [...current, { caption, image }]);
      }
      dispatch(addToGallery(images));
    }
  };
  const appendImage = () => {
    if (!image || !caption) {
      return;
    } else {
      const imageToSave = { caption, image };
      // dispatch(addTopic(imageToSave));
      setImages((current) => [...current, imageToSave]);
      setCount(count + 1);
      setImage(null);
    }
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  return (
    <Wrapper>
      <Navbar />
      <ContentWrapper>
        <Link to="/gallery">
          <Button back>Back</Button>
        </Link>
        <Card>
          <Title>
            Enter a caption then select image(s).caption can be changed for each
            photo
          </Title>
          <InputWithLabel
            placeholder={`Image caption ${count + 1}`}
            label="Image caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
          <Title2>Image {count + 1} </Title2>

          {image ? (
            <Image src={image} />
          ) : (
            <Label htmlFor="photo">
              <FileInput
                type="file"
                id="photo"
                accept=".png,.jpg,.jpeg"
                onChange={(e) => handleImage(e)}
              />
              <Icon id="photo">
                <HiPhotograph />
              </Icon>
            </Label>
          )}
          <Buttons>
            <Button onClick={appendImage} disabled={!image || !caption}>
              Pick Another
            </Button>
            <Button
              onClick={handleClick}
              disabled={loading || (!image && images.length === 0)}
            >
              {loading ? "Uploading..." : "Upload"}
            </Button>
          </Buttons>
        </Card>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  flex-direction: column;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  border-radius: 30px;
  background: #fff;
  height: fit-content;
  padding: 45px;
`;

const Label = styled.label`
  cursor: pointer;
  display: flex;
  position: relative;
  margin-bottom: 20px;
`;
const Icon = styled.div`
  color: #000f2d;
  margin-left: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;
const Title = styled.h2`
  font-family: "DM Serif Display";
  font-style: bold;
  font-weight: 400;
  margin-bottom: 11px;
  font-size: 15px;
  line-height: 28px;
  color: #141414;
`;
const Title2 = styled.h1`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  margin-bottom: 6px;
  font-size: 14px;
  line-height: 28px;

  color: #141414;
`;
const FileInput = styled.input`
  display: none;
  background: #ffffff;
  border: 1.2px solid #f1f1f1;
  border-radius: 8px;
  align-self: flex-start;
  padding: 12px;

  width: 100%;

  margin-bottom: 20px;
  &:invalid {
    border-color: red;
  }
`;
const Buttons = styled.div`
  padding: 20px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Button = styled.button`
  background: #141414;
  border-radius: 8px;
  border: none;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  width: fit-content;
  /* width: 400px; */
  padding: 10px 40px;
  margin-right: 30px;
  margin-bottom: ${(props) => props.back && "20px"};
  cursor: pointer;
  transition: all 0.6s linear;
  &:disabled {
    cursor: not-allowed;
    background: gray;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export default CreateGallery;
