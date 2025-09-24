// components/SectionHeader.jsx

export default function SectionHeader({ title}) {
  return (
    <div className="flex justify-center">
          <div className="flex flex-col items-center justify-center w-fit my-5">
            <h2 className="text-3xl uppercase text-gray-800 my-2 mx-5">
              {title}
            </h2>

            <div className="flex items-center justify-center w-full">
              <span className="w-2 h-2 bg-green-700 rounded-full"></span>
              <span className="border-t-1 border-green-700 flex-1"></span>
              <span className="w-2 h-2 bg-green-700 rounded-full"></span>
            </div>
          </div>
        </div>
  );
}
