const Timeline = () => {
  return (
    <section>
      <h3 className="mb-8  rounded px-4.5 py-2 my-4 text-center text-3xl font-bold">
        My Timeline
      </h3>
      <div className="flex flex-col">
        <div className="flex flex-col items-center border-b border-zinc-200">
          <h6 className="bg-middle-gradient px-4 py-2 w-max rounded-md text-white mb-4 text-xl font-bold">
            2020 - 2024
          </h6>
          <ul className="flex flex-col gap-4 text-center pb-6">
            <li className="flex flex-col gap-1 text-2xl font-bold">
              Software Engineering Student @ ASU 🔱
            </li>
            <li className="flex flex-col gap-2 font-regular text-lg">
              Studied Software Engineering at Arizona State University. Focus
              includes practical projects and coursework.
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center border-b border-zinc-200 mt-8">
          <h6 className="bg-middle-gradient px-4 py-2 w-max rounded-md text-white mb-4 text-xl font-bold">
            2023
          </h6>
          <ul className="flex flex-col gap-4 text-center pb-6">
            <li className="flex flex-col gap-1 text-2xl font-bold">
              MERN Bootcamp Student @ KelasProgramming.com 👨‍💻
            </li>
            <li className="flex flex-col gap-2 font-regular text-lg">
              Learn fullstack of React, Node.js, Express.js, and MongoDB. The
              program include practical project and coursework.
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center border-zinc-200 mt-8">
          <h6 className="bg-middle-gradient px-4 py-2 w-max rounded-md text-white mb-4 text-xl font-bold">
            2019 - 2020
          </h6>
          <ul className="flex flex-col gap-4 text-center pb-6">
            <li className="flex flex-col gap-1 text-2xl font-bold">
              American Degree Program @ Taylor’s Lakeside Campus ✈
            </li>
            <li className="flex flex-col gap-2 font-regular text-lg">
              University preparation for pre-departure to United States. Focus
              on basic programming knowledge.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
