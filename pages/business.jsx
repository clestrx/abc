import React, { useEffect, useState } from 'react'
import Layout from '../src/layouts/Layout'
import { Link, Typography } from '@mui/material'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategoryAction } from '../src/store/category/asyncActions';

const Business = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(3);
  const [total, setTotal] = useState(0);
  const [categories, setCategories] = useState(null);

  const categoryData = useSelector((state) => state?.category?.allCategory);

  useEffect(() => {
    dispatch(getAllCategoryAction({ type: 'Business', page, size }));
  }, [page]);

  useEffect(() => {
    if (categoryData?.loading === false) {
      if (categoryData?.data?.status && Array.isArray(categoryData?.data?.data?.records)) {
        setCategories(categoryData?.data?.data?.records);
        setTotal(categoryData?.data?.data?.totalCount);
        categoryData.data = null;
      }
      setLoading(false);
    }
  }, [categoryData]);

  return (
    <>
      <Layout>
        <div className="max-w-[1024px] mx-auto px-3 mt-7">
          <div className='text-[17px]'>Home / Business</div>
          <div className='text-[50px] explore_your'>Explore Your Fantacies</div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories && categories.map((item, index) => (
              <>
                <div className='flex justify-center items-center my-2 md:my-4 mx-1 '>
                  <div className='overflow-hidden w-full person_card'>
                    <Link href={`/${item?.user_name}`}>
                      <div className='person_card_img'>
                        <img src={`${process.env.NEXT_PUBLIC_APP_API_URL}profile-photo/original/${item?.image}`} alt="" />
                      </div>
                    </Link>
                    <div className='p-3 mb-2'>
                      <Typography variant='h6' className='PerNm mb-2'>
                        {item?.name}
                      </Typography>
                      {/* <Typography variant='subtitle2'>
                        ₹85.00
                      </Typography> */}
                    </div>
                    <div className='flex justify-center items-center py-4'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="10" className="mx-4">
                        <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" className="mx-4">
                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15" className="mx-4">
                        <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" className="mx-4">
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <Stack spacing={2} className='flex justify-center items-center my-4'>
            <Pagination
              count={Math.ceil(total / size)}
              page={page}
              onChange={(event, value) => setPage(value)}
              color="primary"
            />
          </Stack>
        </div>
      </Layout>
    </>
  )
}

export default Business