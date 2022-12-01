import React, { useEffect, useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SingleBlog from "../components/Blog";
import Loader from "../components/Loader";
import NavbarOne from "../components/NavbarOne";
import NavbarTwo from "../components/NavbarTwo";
import Sidebar from "../components/Sidebar";
import { useIsMount } from "../hooks/useIsMount";
import { getMyBlogs } from "../redux/actions/blogActions";
const Blog = () => {
  const { loading, blogs, error } = useSelector((state) => state.blogs);
  const [page, setPage] = useState(0);

  const isMount = useIsMount();
  const dispatch = useDispatch();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  const openSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    dispatch(getMyBlogs(page));

    // eslint-disable-next-line
  }, [page]);
  useEffect(() => {
    if (!isMount) {
      alert(error);
    }
    // eslint-disable-next-line
  }, [error]);

  return (
    <Wrapper>
      <Navbars>
        <NavbarOne />
        <NavbarTwo openSidebar={openSidebar} />
        <Sidebar closeSidebar={closeSidebar} sidebarOpen={sidebarOpen} />
      </Navbars>
      <Title>Hello! 👋🏾 Welcome to Our Education & Academic Blog</Title>
      {loading ? (
        <Loader />
      ) : (
        <Blogs>
          {blogs?.blogs?.map((blog) => (
            <Link to={`/blogs/${blog._id}`}>
              <SingleBlog key={blog._id} {...blog} />
            </Link>
          ))}
        </Blogs>
      )}
      <Buttons>
        <Button
          onClick={() => setPage(page - 1)}
          disabled={page === 0 ? true : false}
        >
          Previous page
        </Button>
        <Button2
          onClick={() => setPage(page - 1)}
          disabled={page === 0 ? true : false}
        >
          <BsFillArrowLeftCircleFill />
        </Button2>

        <PageCount>
          <h1>{`Page ${page + 1}`}</h1>
          <h2>of</h2>
          <h1>{Math.ceil(blogs?.count / 10)}</h1>
        </PageCount>
        <Button
          onClick={() => setPage(page + 1)}
          disabled={page + 1 === Math.ceil(blogs?.count / 10) ? true : false}
        >
          Next page
        </Button>
        <Button2
          onClick={() => setPage(page + 1)}
          disabled={page + 1 === Math.ceil(blogs?.count / 10) ? true : false}
        >
          <BsFillArrowRightCircleFill />
        </Button2>
      </Buttons>
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

const Blogs = styled.div`
  display: grid;

  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  padding: 30px 100px 50px;
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 20px;
  }
  @media screen and (max-width: 800px) {
    padding: 20px;
    grid-template-columns: 1fr;
  }
`;
const Navbars = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
`;
const Title = styled.h1`
  font-family: "Test Heldane Display", "Dm Serif Display";
  font-weight: 700;
  font-size: 70px;
  line-height: 90px;

  padding: 120px 100px;
  text-align: start;

  color: #141414;

  @media screen and (max-width: 900px) {
    font-size: 40px;
    line-height: 50px;
    padding: 65px 20px;
  }
  @media screen and (max-width: 600px) {
    font-size: 34px;
    padding: 50px 20px;
    line-height: 37px;
  }
`;

const Button = styled.button`
  width: 152px;
  padding: 10px 25px;
  height: 40px;
  color: white;
  background: #141414;

  border: transparent;
  border-radius: 10px;
  cursor: pointer;
  color: #ffffff;
  @media screen and (max-width: 600px) {
    display: none;
  }
  transition: all 0.5s linear;
  &:hover {
    border-radius: 26px;
    color: #e5e5e5;
  }
  &:disabled {
    cursor: not-allowed;
    background: gray;
  }
`;

const Button2 = styled.button`
  width: 50px;
  padding: 10px 25px;
  height: 40px;
  color: white;
  background: #141414;
  display: none;

  border: transparent;
  border-radius: 10px;
  cursor: pointer;
  color: #ffffff;
  @media screen and (max-width: 600px) {
    /* display: block; */
    text-align: center;
    display: grid;
    place-items: center;
  }
  transition: all 0.5s linear;
  &:hover {
    border-radius: 26px;
    color: #e5e5e5;
  }
  &:disabled {
    cursor: not-allowed;
    background: gray;
  }
`;
const Buttons = styled.div`
  display: flex;
  padding: 100px;
  width: 100%;
  @media screen and (max-width: 800px) {
    padding: 20px;
  }
  justify-content: space-between;
`;
const PageCount = styled.div`
  display: flex;
  align-items: center;
  h1 {
    color: #141414;
    font-size: 18px;
    font-style: bold;
    margin: 0 5px;
  }
  h2 {
    color: gray;
    font-size: 15px;
  }
`;

export default Blog;
