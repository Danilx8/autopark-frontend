import styled from "styled-components";
import { FC } from "react";

const CardStyled = styled.div`
  height: 50px;
  background-color: #e9e7e7;
  color: red;
`;

export interface IUniversity {
  country: string;
  name: string;
}

const CardUniversity: FC<{ data: IUniversity }> = ({ data }) => (
  <CardStyled>
    <span>
      {data.name} - {data.country}
    </span>
  </CardStyled>
);

export default CardUniversity;
