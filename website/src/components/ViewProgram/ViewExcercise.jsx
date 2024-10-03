import { useState } from 'react';

export default function Excercise({ muscle, excercise }) {


  return (
    <>
      <div className="bg-gray-200 p-2 flex flex-col space-y-2 items-baseline">
        <h2 className="bg-gray-400 p-1">{muscle}</h2>
        <h1>{excercise}</h1>
      </div>
    </>
  );
}