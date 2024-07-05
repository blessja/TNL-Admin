const Page = () => {
  return (
    <div className="w-full gap-10 flex flex-wrap p-5">
      <div className="w-[30%] p-4 border text-center transform transition duration-300 ease-linear hover:bg-gray-300 rounded">
        Home Page
      </div>
      <div className="w-[30%] p-4 border text-center transform transition duration-300 ease-linear hover:bg-gray-300 rounded">
        AdultPage
      </div>
      <div className="w-[30%] p-4 border text-center transform transition duration-300 ease-linear hover:bg-gray-300 rounded">
        For Kids Page
      </div>
      <div className="w-[30%] p-4 border text-center transform transition duration-300 ease-linear hover:bg-gray-300 rounded">
        Study Abroad Page
      </div>
    </div>
  );
};

export default Page;
