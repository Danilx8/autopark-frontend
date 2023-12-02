import React from 'react';
import './App.css';
import Table, { ColumnsType } from 'antd/es/table';
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
const data: DataType[] = [
  {
    id: 1,
    name: 'Chery Tiggo Pro Max 8',
    price: 3120000,
    zeroToHundred: 8.5,
    mileage: 2000,
    year: 2023,
    horsePower: 5000
  },
  {
    id: 2,
    name: 'Chery Tiggo Pro Max 7',
    price: 20550000,
    zeroToHundred: 9.8,
    mileage: 4000,
    year: 2022,
    horsePower: 5500
  }
]

const App = () => {
  return (
    <Table dataSource={data} columns={columns} />
  );
}

export default App;
