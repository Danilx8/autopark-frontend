import React, { useEffect, useState } from 'react';
import './App.css';
import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ARTEM_ROUTE, VLAD_ROUTE } from './app/routing/config';
import MainRouter from './app/routing';

interface DataType {
  id: number;
  name: string;
  price: number;
  zeroToHundred: number;
  mileage: number;
  year: number;
  horsePower: number;
};

const columns: ColumnsType<DataType> = [
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

const App: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [dataSource, setDataSource] = useState<DataType[]>();
  const limit = 3;

  const getVehicles = async (page: number, limit: number) => {
    const response = await axios.get(`https://localhost:7233/api/vehicle/retrieve?page=${page}&limit=${(limit)}`);
    setDataSource(response.data);
  }

  useEffect(() => {
    getVehicles(page, limit);
  }, [page])

  return (
    <>
    <Table dataSource={dataSource} columns={columns} pagination={false} />
    <Button onClick={() => setPage(page - 1)} disabled={page == 1}>Назад</Button>
    <Button onClick={() => setPage(page + 1)} disabled={dataSource?.length === undefined ? true : dataSource.length < limit}>Вперед</Button>
    <h1>{(page)}</h1>
    </>
  );
}

export default App;
