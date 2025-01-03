import React from "react";

const Samples = () => {
  return (
    <div>
      <div class="flex flex-col items-center gap-2">
        
        <div class="group relative bg-zinc-300 p-2 rounded-full">
          <span>Top</span>
          <div class="bg-zinc-800 p-2 rounded-md group-hover:flex hidden absolute -top-2 -translate-y-full left-1/2 -translate-x-1/2">
            <span class="text-zinc-400 whitespace-nowrap">Info</span>
            <div class="bg-inherit rotate-45 p-1 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2"></div>
          </div>
        </div>

        <div class="group relative bg-zinc-300 p-2 rounded-full">
          <span>Left</span>
          <div class="bg-zinc-800 p-2 rounded-md group-hover:flex hidden absolute top-1/2 -translate-y-1/2 -left-2 -translate-x-full">
            <span class="text-zinc-400 whitespace-nowrap">Info</span>
            <div class="bg-inherit rotate-45 p-1 absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2"></div>
          </div>
        </div>

        <div class="group relative bg-zinc-300 p-2 rounded-full">
          <span>Right</span>
          <div class="bg-zinc-800 p-2 rounded-md group-hover:flex hidden absolute top-1/2 -translate-y-1/2 -right-2 translate-x-full">
            <span class="text-zinc-400 whitespace-nowrap">Info</span>
            <div class="bg-inherit rotate-45 p-1 absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2"></div>
          </div>
        </div>

        <div class="group relative bg-zinc-300 p-2 rounded-full">
          <span>Bottom</span>
          <div class="bg-zinc-800 p-2 rounded-md group-hover:flex hidden absolute -bottom-2 translate-y-full left-1/2 -translate-x-1/2">
            <span class="text-zinc-400 whitespace-nowrap">Info</span>
            <div class="bg-inherit rotate-45 p-1 absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Samples;
