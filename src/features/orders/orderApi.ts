import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Order } from '../../types/types';

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://stationary-shop-backend.vercel.app/api' }),
  endpoints: (builder) => ({
    fetchOrders: builder.query<Order[], void>({
      query: () => '/orders',
    }),
    placeOrder: builder.mutation<Order, Omit<Order, '_id'>>({
      query: (order) => ({
        url: '/orders',
        method: 'POST',
        body: order,
      }),
    }),
    getOrderRevenue: builder.query<number, void>({
      query: () => '/orders/revenue',
    }),
  }),
});

export const { useFetchOrdersQuery, usePlaceOrderMutation, useGetOrderRevenueQuery } = orderApi;
