import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import Loader from "../../components/Loader";

import TableTitle from "../../components/TableTitle";
import Tabs from "../../components/adminTabs";

import SingleBlog from "../../components/SingleBlog";
import { getMyBlogs } from "../../redux/admin/actions/blogActions";
import { useIsMount } from "../../hooks/useIsMount";
import Navbar from "../../components/admin/Navbar";
const Blogs = () => {
  const userInfo = useSelector((state) => state.adminSignInInfo);
  const [page, setPage] = useState(0);

  const titles = [
    "Blog title",
    "Category",
    "Description",
    "Created ",
    "Actions",
  ];
  const isMount = useIsMount();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyBlogs(page));
    // eslint-disable-next-line
  }, [page]);
  const { blogs, loading, error } = useSelector((state) => state.blogs);

  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo?.userInfo?.user) {
      navigate("/admin/login");
    }
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (!isMount) {
      if (error) {
        alert(error);
      }
    }
    // eslint-disable-next-line
  }, [error]);
  if (loading) {
    return <Loader />;
  }
  return (
    <Wrapper>
      <ContentWrapper>
        <TabsWrapper>
          <Tabs />
        </TabsWrapper>
        <BlogsWrapper>
          <Navbar />
          <div className="container">
            <Title>Blogs</Title>
            <Link to="/admin/create_blog">
              <Button>Create Blog</Button>
            </Link>
          </div>

          <Titles>
            {titles.map((tableTitle) => {
              return <TableTitle title={tableTitle} key={tableTitle} />;
            })}
          </Titles>
          <BlogList>
            {blogs?.blogs?.map((blog) => {
              return (
                <Link to={`/blogs/${blog._id}`}>
                  <SingleBlog key={blog._id} {...blog} />
                </Link>
              );
            })}
          </BlogList>
          <Buttons>
            <Button2
              onClick={() => setPage(page - 1)}
              disabled={page === 0 ? true : false}
            >
              Previous page
            </Button2>
            <PageCount>
              <h1>{`Page ${page + 1}`}</h1>
              <h2>of</h2>
              <h1>{Math.ceil(blogs?.count / 10)}</h1>
            </PageCount>
            <Button2
              onClick={() => setPage(page + 1)}
              disabled={
                page + 1 === Math.ceil(blogs?.count / 10) ? true : false
              }
            >
              Next page
            </Button2>
          </Buttons>
        </BlogsWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  background-color: #e5e5e5;
  height: 100%;
  display: flex;
  flex-direction: column;
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

  background: #4bb543;

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
const BlogsWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  display: flex;

  padding: 30px 88px 30px 37px;

  flex-direction: column;
  &::-webkit-scrollbar {
    display: none;
  }
  .container {
    display: flex;
    margin-top: 15px;
    justify-content: space-between;
    align-items: center;
  }
`;

const BlogList = styled.div`
  display: flex;
  flex-direction: column;
`;
const Titles = styled.div`
  width: 100%;

  margin-top: 30px;
  display: grid;
  margin-bottom: 30px;
  justify-items: center;

  grid-template-columns: repeat(5, 1fr);
`;
const TabsWrapper = styled.div`
  width: 340px;
`;
const Button2 = styled.button`
  width: 167px;
  height: 40px;
  color: white;

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
  &:disabled {
    cursor: not-allowed;
    background: gray;
  }
`;
const Buttons = styled.div`
  display: flex;
  padding: 20px;
  width: 100%;

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
export default Blogs;
