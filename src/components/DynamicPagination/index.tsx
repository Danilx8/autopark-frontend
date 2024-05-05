import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import CardUniversity, { IUniversity } from "../CardUniversity";
import { useQuery } from "react-query";

const LIMIT_UNIVERSITIES = 10;

const DynamicPagination: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { ref, inView } = useInView({
    threshold: 1.0,
  });

  useEffect(() => {
    if (inView) {
      setCurrentPage((prev) => prev + 1);
    }
  }, [inView]);

  const fetchUniversities = async (currentPage: number) => {
    const offset = (currentPage - 1) * LIMIT_UNIVERSITIES; // Укажите свой лимит в константах компонента
    const { data } = await axios.get(
      `http://universities.hipolabs.com/search?offset=${offset}&limit=${LIMIT_UNIVERSITIES}`,
    );
    return data;
  };

  const { data, isLoading } = useQuery(
    ["universities", currentPage],
    async () => await fetchUniversities(currentPage),
    {
      keepPreviousData: true,
    },
  );

  if (!data) {
    return <h3>Нет данных</h3>;
  }

  const BlockObserver = styled.div`
    height: 40px;
    background-color: black;
  `;

  const ListStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-height: 400px;
  `;

  return (
    <ListStyled>
      <h1>List Universities</h1>
      {data.map((university: IUniversity) => (
        <CardUniversity data={university} key={university.name}></CardUniversity>
      ))}
      {isLoading && <div>Загрузка...</div>}
      {!isLoading && <BlockObserver ref={ref}></BlockObserver>}
    </ListStyled>
  );
};

export default DynamicPagination;
