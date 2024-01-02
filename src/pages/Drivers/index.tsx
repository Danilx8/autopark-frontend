import { Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface DriverData {
    id: number,
    name: string,
    salary: number,
    enterpriseId: number,
    vehicleId: number
}

const columns: ColumnsType<DriverData> = [
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
        title: 'Salary',
        dataIndex: 'salary',
        key: 'salary'
    },
    {
        title: 'Enterprise Id',
        dataIndex: 'enterpriseId',
        key: 'enterpriseId'
    },
    {
        title: 'Vehicle Id',
        dataIndex: 'vehicleId',
        key: 'vehicleId'
    }
];

const Drivers: React.FC = () => {
    const [page, setPage] = useState<number>(1);
    const [dataSource, setDataSource] = useState<DriverData[]>();
    const [limit, setLimit] = useState<number>(2);
  
    const getVehicles = async (page: number, limit: number) => {
      const response = await axios.get(`https://localhost:7233/api/driver/retrieve?page=${page}&limit=${limit}`);
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

export default Drivers;