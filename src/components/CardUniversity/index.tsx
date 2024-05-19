import { FC } from "react";
import styled from "styled-components";

export interface IUniversity {
  country: string;
  name: string;
}

const CardStyled = styled.div`
  height: 50px;
  background-color: #e9e7e7;
  color: red;
`;

const CardUniversity: FC<{ data: IUniversity }> = ({ data }) => (
  <CardStyled>
    <title>{data.name}</title>
    <span>{data.country}</span>
  </CardStyled>
);

export default CardUniversity;
