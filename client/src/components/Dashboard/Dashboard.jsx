import React from 'react';

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
      {data.map((d, i) => {
        return (
          <div
            key={i}
            className='w-[300px] h-[250px] flex flex-col justify-between bg-black/[0.03] rounded-[6px] p-4'
          >
            <div>
              <h1 className='font-medium text-lg font-main'>{d.title}</h1>
              <p className='font-secondary text-sm mt-3'>{d.description}</p>
            </div>

            <div>
              <h3 className='font-secondary text-sm underline underline-offset-2 cursor-pointer'>
                view more
              </h3>
            </div>
          </div>
        );
      })}
    </main>
  );
}

export default Dashboard;
