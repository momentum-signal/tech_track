import Image from "next/image";
import React from "react";

const JobCard = () => {
  return (
    <div className="overflow-hidden p-8 rounded-2xl border shadow hover:shadow-md ">
      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime="2020-03-16">Mar 16, 2020</time>
          <p className="relative z-10 rounded-fullpx-3 font-medium">
            Marketing
          </p>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg/6 font-semibold">
            <p>
              <span className="absolute inset-0"></span>
              Boost your conversion rate
            </p>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm/6">
            Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam
            vitae illo. Non aliquid explicabo necessitatibus unde. Sed
            exercitationem placeat consectetur nulla deserunt vel. Iusto
            corrupti dicta.
          </p>
        </div>
        <div className="mt-5 flex flex-col space-y-3 text-sm font-medium sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
          <div>
            Experience:
            <span className="ml-2 mr-2 rounded-full">2 Years</span>
          </div>
          <p>
            Salary:
            <span className="ml-2 mr-2 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
              180-250k
            </span>
          </p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <Image
            width={500}
            height={500}
            src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            className="size-10 rounded-full bg-gray-50"
          />
          <div className="text-sm/6">
            <p className="font-semibold">
              <a href="#">
                <span className="absolute inset-0"></span>
                Michael Foster
              </a>
            </p>
            <p className="text-primary">Co-Founder / CTO</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default JobCard;
