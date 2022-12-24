import clsx from "clsx";
import React from "react";

const default_avatar =
  "https://pwco.com.sg/wp-content/uploads/2020/05/Generic-Profile-Placeholder-v3.png";

export const UserRow: React.FC<any> = ({
  name,
  score,
  avatar,
  className,
}: any) => {
  return (
    <div
      className={clsx([
        "flex justify-between h-10 mx-2 justify-between",
        className,
      ])}
    >
      <div className="flex flex-col items-start justify-center col-span-6">
        <div className="flex items-center grid grid-cols-12 gap-2">
          <div className="flex flex-col items-center justify-center col-span-2">
            <div
              className="bg-gray-300 rounded-full h-9 w-9"
              style={{
                backgroundImage:
                  "url(" + (avatar ? avatar : default_avatar) + ")",
                backgroundSize: "cover",
              }}
            />
          </div>
          <div className="ml-2 overflow-hidden col-span-10">
            <p className="flex flex-col text-lg text-white truncate align-middle font-regular">
              {name}
            </p>
          </div>
        </div>
      </div>
      <p className="flex items-center justify-center w-20 py-1 text-xl font-bold bg-gray-300 rounded-md">
        {score?.toFixed(1)}
      </p>
    </div>
  );
};