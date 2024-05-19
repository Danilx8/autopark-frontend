import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import CardUniversity, { IUniversity } from "../CardUniversity";

const LIMIT_UNIVERSITIES = 10;

const BlockObserver = styled.div`
  height: 40px;
  background-color: black;
`;

const ListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 400px;
  align-items: center;
  overflow-y: scroll;
`;

const DynamicPagination: FC = () => {
  const [universities, setUniversities] = useState<IUniversity[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchUniversities();
  }, [currentPage]);
  const { ref, inView } = useInView({
    threshold: 1.0,
  });
  useEffect(() => {
    if (inView) {
      setCurrentPage((prev) => prev + 1);
    }
  }, [inView]);

  const fetchUniversities = async () => {
    try {
      setLoading(true);
      const offset = (currentPage - 1) * LIMIT_UNIVERSITIES;
      const { data } = await axios.get(
        `http://universities.hipolabs.com/search?offset=${offset}&limit=${LIMIT_UNIVERSITIES}`,
      );
      setUniversities((prev) => [...prev, ...data]);
    } catch (error) {
      console.log("Error fetching univer...", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ListStyled>
      <h1>List Universities</h1>
      {universities.map((university) => (
        <CardUniversity data={university} key={university.name}></CardUniversity>
      ))}
      {loading && <div>Загрузка...</div>}
      {!loading && <BlockObserver ref={ref}></BlockObserver>}
    </ListStyled>
  );
};

export default DynamicPagination;
