import { baseApi } from "./baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getProducts: builder.query({
      query: () => "/products",
      providesTags: ["Products"],
    }),

    getProductById: builder.query({
      query: (id: string) => `/products/${id}`,
      providesTags: ["Products"],
    }),

    getCategories: builder.query({
      query: () => "/categories",
      providesTags: ["Categories"],
    }),

  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetCategoriesQuery,
} = productApi;
