import React from 'react';
import { Link } from "react-router";

const data = [
  {
    title: 'How to create a frontend applications?',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae veniam velit praesentium maxime quis aut! Dignissimos omnis commodi maxime.',
  },
  {
    title: 'How to create a frontend applications?',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae veniam velit praesentium maxime quis aut! Dignissimos omnis commodi maxime.',
  },
];

function Dashboard() {
  return (
    <main className='px-12 py-5 flex gap-4 flex-wrap'>
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className='w-[300px] h-[250px] flex flex-col justify-between bg-black/[0.03] rounded-[6px] p-4'
          >
            <div>
              <h1 className='font-medium text-lg font-main'>{item.title}</h1>
              <p className='font-secondary text-sm mt-3'>{item.description}</p>
            </div>

            <div>
              <Link
                  to={`/note/${item.title.toLowerCase().split(" ").join("-")}`}
                  className='font-secondary text-sm underline underline-offset-2 cursor-pointer'>
                view more
              </Link>
            </div>
          </div>
        );
      })}
    </main>
  );
}

export default Dashboard;
