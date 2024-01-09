import { Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

interface VehicleData {
    id: number;
    name: string;
    price: number;
    zeroToHundred: number;
    mileage: number;
    year: number;
    horsePower: number;
};

const columns: ColumnsType<VehicleData> = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id'
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price'
    },
    {
        title: 'Zero to hundred',
        dataIndex: 'zeroToHundred',
        key: 'zeroToHundred'
    },
    {
        title: 'Mileage',
        dataIndex: 'mileage',
        key: 'mileage'
    },
    {
        title: 'Year',
        dataIndex: 'year',
        key: 'year'
    },
    {
        title: 'Horse powers',
        dataIndex: 'horsePower',
        key: 'horsePower'
    }
]

// const StyledAntButton = styled(Button)`
//     margin: 2rem 1rem 0rem 0rem;
// `;


const Vehicles: React.FC = () => {
    const [page, setPage] = useState<number>(1);
    const [dataSource, setDataSource] = useState<VehicleData[]>();
    const [limit] = useState<number>(3);
  
    const getVehicles = async (page: number, limit: number) => {
      const response = await axios.get(`https://localhost:7233/api/vehicle/retrieve?page=${page}&limit=${limit}`);
      setDataSource(response.data);
    }
  
    useEffect(() => {
      getVehicles(page, limit);
    })
  
    return (
      <>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
      <StyledAntButton onClick={() => setPage(page - 1)} disabled={page === 1}>Назад</StyledAntButton>
      <StyledAntButton onClick={() => setPage(page + 1)} disabled={dataSource?.length === undefined ? true : dataSource.length < limit}>Вперед</StyledAntButton>
      <h1>{(page)}</h1>
      </>
    );
}

export default Vehicles;