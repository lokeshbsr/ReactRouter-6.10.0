import React, { Suspense } from 'react';
import CatService from '../services/CatService';
import { useLoaderData, defer, Await } from 'react-router-dom';

const Cat = () => {
  const cat = useLoaderData();
  return (
    <>
      <div>A Cat Story!</div>
      <Suspense fallback={<p>Loading....</p>}>
        <Await resolve={cat.msg} errorElement={'Error Occured'}>
          {(loadedCat) => <div>{loadedCat.fact}</div>}
        </Await>
      </Suspense>
    </>
  );
};

export default Cat;

export function loader() {
  return defer({ msg: CatService.getCatMsg() });
}
